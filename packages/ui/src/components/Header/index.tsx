import React from 'react';
import { Title } from '../Text';
import { Colors } from '../../constants/style';
import { TextMap } from 'business-logic/lib';
import { HeaderContainer } from './style';


export const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Title color={Colors.white}>{TextMap.cellFilling}</Title>
        </HeaderContainer>
    );
};

