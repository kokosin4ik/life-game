import { CellType } from '../../types';
import { processCellsList } from './index';
import { getLastElement } from 'common/lib';

describe('tests for the main logic function', () => {
    it('processCellsList correctly creates Life when 2 last cells are Live Cells', () => {
        let cells: CellType[] = [CellType.Dead, CellType.Life, CellType.Live, CellType.Live];
        let processedCellsList = processCellsList(cells);
        expect(processedCellsList.length).toBe(cells.length + 1);
        expect(getLastElement(processedCellsList)).toBe(CellType.Life);

        cells = [CellType.Live, CellType.Live];
        processedCellsList = processCellsList(cells);
        expect(processedCellsList.length).toBe(cells.length + 1);
        expect(getLastElement(processedCellsList)).toBe(CellType.Life);
    });

    it('processCellsList does not create Life when 2 last cells are not Live Cells both', () => {
        let cells: CellType[] = [CellType.Dead, CellType.Live, CellType.Dead, CellType.Live];
        let processedCellsList = processCellsList(cells);
        expect(processedCellsList.length).not.toBe(cells.length + 1);
        expect(getLastElement(processedCellsList)).toBe(getLastElement(cells));

        cells = [CellType.Dead, CellType.Live];
        processedCellsList = processCellsList(cells);
        expect(getLastElement(processedCellsList)).toBe(getLastElement(cells));
    });

    it('processCellsList correctly kills nearest Life Cell only if last 3 cells are Dead', () => {
        let cells: CellType[] = [CellType.Life, CellType.Dead, CellType.Dead, CellType.Dead];
        let processedCellsList = processCellsList(cells);
        expect(processedCellsList.length).toBe(cells.length);
        expect(processedCellsList.every((cell) => cell === CellType.Dead)).toBe(true);
    })

    it('processCellsList doesnt kill nearest Life Cell when last 3 cells are not all Dead', () => {
        let cells = [CellType.Live, CellType.Life, CellType.Dead, CellType.Dead];
        let processedCellsList = processCellsList(cells);
        expect(processedCellsList.length).toBe(cells.length);
        expect(processedCellsList.every((cell) => cell === CellType.Dead)).toBe(false);

        cells = [CellType.Live, CellType.Dead, CellType.Dead, CellType.Live];
        processedCellsList = processCellsList(cells);
        expect(processedCellsList.length).toBe(cells.length);
        expect(processedCellsList.every((cell) => cell === CellType.Dead)).toBe(false);
    })

    it('processCellsList correctly process some corner cases', () => {
        let cells: CellType[] = [];
        let processedCellsList = processCellsList(cells);
        expect(processedCellsList.length).toBe(cells.length);

        cells = [CellType.Live];
        processedCellsList = processCellsList(cells);
        expect(processedCellsList.length).toBe(cells.length);
        expect(getLastElement(processedCellsList)).toBe(CellType.Live);

        cells = [CellType.Dead, CellType.Dead, CellType.Dead];
        processedCellsList = processCellsList(cells);
        expect(processedCellsList.length).toBe(cells.length);
        expect(processedCellsList.every((cell) => cell === CellType.Dead)).toBe(true);
    })
});
