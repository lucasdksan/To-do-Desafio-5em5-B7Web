import { createGlobalStyle } from 'styled-components';
import { colors } from "./themes/colors"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: ${colors.main_background};
        padding: 10px;
        width: auto;
        min-height: 100vh;
        max-width: 980px;
        margin: auto;
    }
    #root{
        width: 100%;
        height: 100%;
    }
`;