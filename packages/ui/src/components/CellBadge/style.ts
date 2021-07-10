import styled from 'styled-components';
import { CellType } from 'business-logic/lib';

import { assertUnreachableError } from 'common/lib';
import { IPropsWithCell } from '../../types';
import { BorderRadius, FontSize } from '../../constants/style';

const cellBadgeSize = '40px';

export const CellBadgeContainer = styled.div`
    height: ${cellBadgeSize};
    width: ${cellBadgeSize};
    background: ${(props: IPropsWithCell) => getCellBadgeBackgroundStyle(props.cell)};
    border-radius: ${BorderRadius.round};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const EmojiContainer = styled.div`
    font-size: ${FontSize.big};
`;

const getCellBadgeBackgroundStyle = (cellType: CellType) => {
    switch (cellType) {
        case CellType.Dead:
            return 'linear-gradient(180deg, #0D658A 0%, #B0FFB4 100%)';
        case CellType.Life:
            return 'linear-gradient(180deg, #AD00FF 0%, #FFB0E9 100%)';
        case CellType.Live:
            return 'linear-gradient(180deg, #FFB800 0%, #FFF7B0 100%)';
        default:
            return assertUnreachableError(cellType, 'cellType', 'getCellBadgeBackground');
    }
};