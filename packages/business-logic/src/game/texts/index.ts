import { CellType } from '../../types';
import { TextMap } from '../../constants';
import { assertUnreachableError } from 'common/lib';

export const getCellNameByType = (cellType: CellType): string => {
    switch (cellType) {
        case CellType.Dead:
            return TextMap.dead;
        case CellType.Live:
            return TextMap.live;
        case CellType.Life:
            return TextMap.life;
        default:
            return assertUnreachableError(cellType, 'cellType', 'getCellNameByType');
    }
}

export const getCellPrefixByType = (cellType: CellType): string => {
    switch (cellType) {
        case CellType.Dead:
            return TextMap.deadCellPrefix;
        case CellType.Live:
            return TextMap.liveCellPrefix;
        case CellType.Life:
            return TextMap.lifeCellPrefix;
        default:
            return assertUnreachableError(cellType, 'cellType', 'getCellPrefixByType');
    }
}

export const getCellEmojiByType = (cellType: CellType): string => {
    switch (cellType) {
        case CellType.Dead:
            return TextMap.deadEmoji;
        case CellType.Live:
            return TextMap.liveEmoji;
        case CellType.Life:
            return TextMap.lifeEmoji;
        default:
            return assertUnreachableError(cellType, 'cellType', 'getCellEmojiByType');
    }
}