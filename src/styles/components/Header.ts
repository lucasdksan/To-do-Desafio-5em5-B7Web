import styled from 'styled-components';
import { colors } from "../themes/colors";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${colors.main_gray};
    flex-direction: row;
    width: 100%;
    margin-bottom: 25px;
`;
export const Title = styled.h1`
    color: ${colors.main_white};
    text-align: center;
    padding-bottom: 20px;
`;
