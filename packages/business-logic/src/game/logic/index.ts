import {
    DEAD_CELLS_REQUIRED_TO_KILL_LIFE,
    LIVE_CELLS_REQUIRED_TO_CREATE_NEW_LIFE,
    LIVE_PROBABILITY,
} from '../../constants';
import { CellType } from '../../types';
import { assertUnreachableError, getLastElement, getLastNElementsOfArray } from 'common/lib';

export const createNewRandomCell = (): CellType => {
    return Math.random() > LIVE_PROBABILITY ? CellType.Live : CellType.Dead;
};

// main logic of the app. Tested in
export const processCellsList = (cellsList: CellType[]): CellType[] => {
    const cellsListCopy = [...cellsList];

    const lastCell = getLastElement(cellsListCopy);

    if (
        !lastCell
        || cellsListCopy.length < Math.min(LIVE_CELLS_REQUIRED_TO_CREATE_NEW_LIFE, DEAD_CELLS_REQUIRED_TO_KILL_LIFE)
    ) {
        return cellsListCopy;
    }

    switch (lastCell) {
        case CellType.Live:
            return tryCreateLife(cellsListCopy, LIVE_CELLS_REQUIRED_TO_CREATE_NEW_LIFE);
        case CellType.Dead:
            return tryKillLife(cellsListCopy, DEAD_CELLS_REQUIRED_TO_KILL_LIFE);
        case CellType.Life:
            return cellsListCopy;
        default:
            return assertUnreachableError(lastCell, 'lastCell', 'processCellsList');
    }
};

const tryCreateLife = (
    cells: CellType[],
    lifeCellsRequiredToKillLife: number,
): CellType[] => {
    return canCreateLife(cells, lifeCellsRequiredToKillLife) ? [...cells, CellType.Life] : cells;
};

const canCreateLife = (
    cells: CellType[],
    lifeCellsRequiredToKillLife: number,
): boolean => {
    if (cells.length < lifeCellsRequiredToKillLife) {
        return false;
    }

    const cellsToCheck = getLastNElementsOfArray(cells, lifeCellsRequiredToKillLife);

    return checkIfCellTypesArrayContainsOnlyOneCellType(cellsToCheck, CellType.Live);
};

const tryKillLife = (
    cells: CellType[],
    deadCellsRequiredToKillLife: number,
): CellType[] => {
    if (!canKillLife(cells, deadCellsRequiredToKillLife)) {
        return cells;
    }

    const potentialLifeCellIndex = cells.length - deadCellsRequiredToKillLife - 1;
    const potentialLifeCell = cells[potentialLifeCellIndex];

    if (potentialLifeCell && potentialLifeCell === CellType.Life) {
        return [
            ...cells.slice(0, potentialLifeCellIndex),
            CellType.Dead,
            ...cells.slice(potentialLifeCellIndex + 1),
        ];
    }

    return cells;
};

const canKillLife = (
    cells: CellType[],
    deadCellsRequiredToKillLife: number,
): boolean => {
    if (cells.length < deadCellsRequiredToKillLife) {
        return false;
    }

    const cellsToCheck = getLastNElementsOfArray(cells, deadCellsRequiredToKillLife);

    return checkIfCellTypesArrayContainsOnlyOneCellType(cellsToCheck, CellType.Dead);
};

const checkIfCellTypesArrayContainsOnlyOneCellType = (
    cells: CellType[],
    cellTypeToCheck: CellType,
) => {
    return cells.every(cellType => cellTypeToCheck === cellType);
};