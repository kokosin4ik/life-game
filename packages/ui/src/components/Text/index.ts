import styled from 'styled-components';
import { Colors, FontFamily, FontSize, FontWeight, LineHeight } from '../../constants/style';

interface ITitleProps {
    color?: Colors;
}

export const Title = styled.h6`   
    font-family: ${FontFamily};
    font-weight: ${FontWeight.bold};
    font-size: ${FontSize.big};
    line-height: ${LineHeight.big};
    
    letter-spacing: 0.0015em;
    
    color: ${(props: ITitleProps) => props.color || Colors.black};
`;

export const Subtitle = styled.h6`   
    font-family: ${FontFamily};
    font-style: normal;
    font-weight: ${FontWeight.normal};
    font-size: ${FontSize.small};
    line-height: ${LineHeight.small};
    
    letter-spacing: 0.0025em;
    
    color: ${(props: ITitleProps) => props.color || Colors.black};
`;