import React from 'react';
import { getCellNameByType, getCellPrefixByType } from 'business-logic/lib';
import { Subtitle, Title } from '../Text';
import { CellBadgeContainer, CellCardContainer, TextContainer } from './style';
import { CellBadge } from '../CellBadge';
import { IPropsWithCell } from '../../types';

interface IProps extends IPropsWithCell {}

export const CellCard: React.FC<IProps> = (props: IProps) => {
    const {
        cell,
    } = props;

    return (
        <CellCardContainer>
            <CellBadgeContainer>
                <CellBadge cell={cell}/>
            </CellBadgeContainer>
            <TextContainer>
                <Title>{getCellNameByType(cell)}</Title>
                <Subtitle>{getCellPrefixByType(cell)}</Subtitle>
            </TextContainer>
        </CellCardContainer>
    );
};