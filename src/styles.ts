import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
    }

    :root {
        --black: #24292e;
        --white: #fff;
        --grey: #666;

        --underline: #f9826c;
        /* --border: rgba(27,31,35,.15); */
        --hover: rgba(209,213,218,.5);
        --border: rgba(209,213,218,.5);

        --green-button: #2ea44f;
        --white-button: #fafbfc;
        --span: #0366d6;

        --grey-text: #666;
        --white-text: #fff;
        --blue-text: #0366d6;
        --black-text: #24292e;
    }
`

export default GlobalStyles