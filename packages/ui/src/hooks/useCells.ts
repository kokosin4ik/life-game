import { useCallback, useState } from 'react';
import { CellType, createNewRandomCell, processCellsList } from 'business-logic/lib';

const useCells = () => {
    const [cells, setCells] = useState<CellType[]>([]);

    const createCell = useCallback(() => {
        const newCell = createNewRandomCell();
        const processedCells = processCellsList([...cells, newCell]);
        setCells(processedCells);
    }, [
        cells,
        setCells,
    ]);

    return {
        cells,
        createCell,
    }
};

export default useCells;