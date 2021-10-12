import styled from 'styled-components';
import { colors } from '../themes/colors';

export const Container = styled.div`
    border: 1px solid ${colors.main_new_sub_gray};
    border-radius: 15px;
    padding: 15px;
    margin: 20px 0px;
    display: flex;
    align-items: center;
    .image{
        margin-right: 5px;
    }
    input{
        border: 0px;
        background-color: transparent;
        outline: 0;
        color: ${colors.main_white};
        font-size: 18px;
        flex: 1;
    }
`;
