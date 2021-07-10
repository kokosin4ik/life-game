import React from 'react';
import { Button } from '../Button';
import { FooterContainer } from './style';
import { TextMap } from 'business-logic/lib';

export interface IProps {
    onCreateCellButtonClick: VoidFunction;
}

export const Footer: React.FC<IProps> = (props: IProps) => {
    const {
        onCreateCellButtonClick,
    } = props;

    return (
        <FooterContainer>
            <Button onClick={onCreateCellButtonClick}>{TextMap.create}</Button>
        </FooterContainer>
    );
};