import React from 'react';
import { getCellEmojiByType } from 'business-logic/lib';
import { IPropsWithCell } from '../../types';
import { CellBadgeContainer, EmojiContainer } from './style';

export interface IProps extends IPropsWithCell {}

export const CellBadge: React.FC<IProps> = (props: IProps) => {
    const {
        cell,
    } = props;

    return (
        <CellBadgeContainer cell={cell}>
            <EmojiContainer>
                {getCellEmojiByType(cell)}
            </EmojiContainer>
        </CellBadgeContainer>
    );
};