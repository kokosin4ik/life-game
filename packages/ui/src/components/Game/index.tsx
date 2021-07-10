import React from 'react';
import { Header } from '../Header';
import { CellsList } from '../CellsList';
import { Footer } from '../Footer';
import { GameContainer } from './style';
import useCells from '../../hooks/useCells';

export const Game: React.FC = () => {
    const {
        cells,
        createCell,
    } = useCells();

    return (
        <GameContainer>
            <Header/>

            <CellsList cells={cells}/>

            <Footer onCreateCellButtonClick={createCell}/>
        </GameContainer>
    );
};
