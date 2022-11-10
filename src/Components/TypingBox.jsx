import React, { useRef, useEffect, createRef, useState } from "react";

const TypingBox = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const inputTextRef = useRef(null);

  const wordSpanRef = Array(words.length)
    .fill(0)
    .map((i) => createRef(null));
  // console.log(wordSpanRef);
  // console.log(Array(7));

  const handelKeyDown = (e) => {
    // console.log(e.key);
    let allChildrenSpan = wordSpanRef[currentWordIndex].current.childNodes;

    //logic for space
    if (e.keyCode === 32) {
      if (allChildrenSpan.length <= currentCharIndex) {
        allChildrenSpan[currentCharIndex - 1].classList.remove("right");
        // allChildrenSpan[currentCharIndex - 1].className = allChildrenSpan[
        //   currentCharIndex - 1
        // ].className.replace("right", "");
      } else {
        allChildrenSpan[currentCharIndex].className = allChildrenSpan[
          currentCharIndex
        ].className.replace("current", "");
      }

      wordSpanRef[currentWordIndex].current.childNodes[0].className =
        "char current";

      setCurrentWordIndex(currentWordIndex + 1);
      setCurrentCharIndex(0);

      return;
    }

    if (e.key === allChildrenSpan[currentCharIndex].innerText) {
      allChildrenSpan[currentCharIndex].className = "char correct";
    } else {
      allChildrenSpan[currentCharIndex].className = "char incorrect";
    }

    if (currentCharIndex + 1 === allChildrenSpan.length) {
      allChildrenSpan[currentCharIndex].className += " right";
    } else {
      allChildrenSpan[currentCharIndex + 1].className = "char current";
      setCurrentCharIndex(currentCharIndex + 1);
    }
  };

  const focusInput = () => {
    inputTextRef.current.focus();
  };

  useEffect(() => {
    focusInput();
    wordSpanRef[0].current.childNodes[0].className = "char current";
  }, []);

  return (
    <div>
      <div className="type-box" onClick={focusInput}>
        <div className="words">
          {words.map((word, index) => (
            <span className="word" ref={wordSpanRef[index]} key={index}>
              {word.split("").map((char, idx) => (
                <span className="char">{char}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <input
        type="text"
        className="hidden-input"
        ref={inputTextRef}
        onKeyDown={(e) => handelKeyDown(e)}
      />
    </div>
  );
};

export default TypingBox;
