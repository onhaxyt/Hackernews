import styled, { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle `

    html {
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
    }
    *, *:before, *:after {
        -webkit-box-sizing: inherit;
                box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        line-height: 1;
        color: #2bc4c4;
        background-color: #373838;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
    }

    ul {
        margin: 0;
        padding: 0;
    }

`
export const StoryContainerWrapper = styled.main `

    max-width: 1140px;
    padding: 20px 15;
    margin: auto;

`;