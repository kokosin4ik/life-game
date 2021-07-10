import styled from 'styled-components';
import { BorderRadius, Colors, ITEM_WIDTH } from '../../constants/style';

const CARD_HEIGHT = 72;
const CARD_WIDTH = 72;

export const CellCardContainer = styled.div`
    width: ${ITEM_WIDTH}px;
    height: ${CARD_HEIGHT}px;
    border-radius: ${BorderRadius.big};
    background: ${Colors.white};
    display: flex;
`;
export const CellBadgeContainer = styled.div`
    width: ${CARD_WIDTH}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;