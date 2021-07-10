import styled from 'styled-components';

export const CellListContainer = styled.div`
    height: 84vh;
    overflow: auto;    
`;

export const CellCardContainer = styled.div`
    margin: 0 auto;
    width: fit-content;
    &:not(:first-child){
        margin-top: 10px;
    }
`;