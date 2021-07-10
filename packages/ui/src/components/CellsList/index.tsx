import React, { useEffect } from 'react';
import { CellType } from 'business-logic/lib';
import { CellCard } from '../CellCard';
import { CellCardContainer, CellListContainer } from './style';
import useScrollToBottom from '../../hooks/useScroolToBottom';

export interface IProps {
    cells: CellType[],
}

export const CellsList: React.FC<IProps> = (props: IProps) => {
    const {
        cells,
    } = props;

    const divRef = React.useRef<HTMLDivElement>(null);

    const scrollToBottom = useScrollToBottom(divRef);

    useEffect(scrollToBottom, [scrollToBottom, cells.length]);

    return (
        <CellListContainer ref={divRef}>
            {cells.map(renderCellItem)}
        </CellListContainer>
    );
};

const renderCellItem = (
    cell: CellType,
    index: number,
): JSX.Element => {
    return (
        <CellCardContainer key={cell + index}>
            <CellCard cell={cell}/>
        </CellCardContainer>
    );
};