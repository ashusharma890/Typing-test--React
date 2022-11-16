import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before{
    box-sizing: border-box;
}


body{
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    padding:0;
    margin: 0;
    transition: all 0.25s linear;
}

.canvas{
    display: grid;
    grid-auto-flow: row;
    grid-template-row: auto 1fr auto;
    min-height: 100vh;
    gap: 0.5rem;
    padding: 1rem;
    width: 100vw;
    align-items: center;
}

.type-box{
    display: block;
    max-width: 1000px;
    height: 140px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
}

.words{
    font-size: 30px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    width: 100%;
    color: ${({ theme }) => theme.typeBoxText}
}

.word{
    margin: 5px;
    padding-right: 2px;
}

.hidden-input{
    opacity: 0;
}

.correct{
    color: ${({ theme }) => theme.title};
}

.incorrect{
    color: ${({ theme }) => theme.title} ;
}

.current{
    border-left: 1px solid;
    animation: blinkingLeft 2s infinite;
    animation-timing-function: ease;

    @keyframes blinkingLeft{
        0% {border-left-color: ${({ theme }) => theme.title}}
        25% {border-left-color: ${({ theme }) => theme.background}}
        50% {border-left-color: ${({ theme }) => theme.title}}
        75% {border-left-color: ${({ theme }) => theme.background}}
        100% {border-left-color: ${({ theme }) => theme.title}}
    }
}

.right{
    border-right: 1px solid;
    animation: blinkingRight 2s infinite;
    animation-timing-function: ease;

    @keyframes blinkingRight{
        0% {border-left-color: ${({ theme }) => theme.title}}
        25% {border-left-color: ${({ theme }) => theme.background}}
        50% {border-left-color: ${({ theme }) => theme.title}}
        75% {border-left-color: ${({ theme }) => theme.background}}
        100% {border-left-color: ${({ theme }) => theme.title}}
    }
}

.counter{
    cursor: none;
}

.upper-menu{
    display: flex;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    font-size: 20px;
    padding: 1rem;
    color: ${({ theme }) => theme.typeBoxText}
}

.time-modes{
    display: flex;
}

.time{
    margin-right: 15px;
}

.time:hover{
    cursor: pointer;
    color: ${({ theme }) => theme.title};

}

.stats-box{
    display: flex;
    max-width: 1000px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
}

.title{
    font-size: 20px;
    color: ${({ theme }) => theme.typeBoxText};
}

.subtitle{
    font-size: 30px;
    color: ${({ theme }) => theme.title};
    // display: block;
    // background: red;
}


.left-stats{
    width: 30%;
    padding: 30px;
}

.right-stats{
    // border: 1px;
    width: 70%;
}

.footer, .header{
    display: flex;
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    height: 60px;
    color: ${({ theme }) => theme.title};
}

.box{
    width: 400px;
}



`;
