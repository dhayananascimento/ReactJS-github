import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    }

    body {
        width: 100%;
        height: 100vh;
    }

    :root {
        --white: #fff;
        --grey: #666;

        --underline: #f9826c;
        --hover: rgba(209,213,218,.3);

        --green-button: #2ea44f;
        --icon: #aaa;
    }
`;

export default GlobalStyles;
