import React from 'react';
import styled from 'styled-components';
import { BorderRadius, Colors, FontFamily, FontSize, FontWeight, ITEM_WIDTH } from '../../constants/style';

export interface IProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button: React.FC<IProps> = (props: IProps) => {
    return (
        <StyledButton {...props} />
    );
};

const StyledButton: React.FC<IProps> = styled.button`
    color: ${Colors.white};
    background: ${Colors.violet};
    width: ${ITEM_WIDTH}px;
    height: 36px;
    border: none;   
    border-radius: ${BorderRadius.small};
    font-size: ${FontSize.small};
    line-height: ${FontSize.small};
    font-family: ${FontFamily};
    font-weight: ${FontWeight.bold};
    letter-spacing: 0.0125em;
    text-transform: uppercase;
`;
