import styled from 'styled-components';
import { colors } from '../themes/colors';

interface ContainerProps{
    done: boolean;
}

export const Container = styled.article<ContainerProps>`
    display: flex;
    background-color: ${colors.main_dark_blue};
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    label{
        text-decoration: ${ (props)=> props.done ? "line-through" : "none" };
    }
`;
export const Input = styled.input`
    width: 25px;
    height: 25px;
    margin-right: 5px;
`;
export const Name = styled.label`
    color: ${colors.main_sub_gray};
`;