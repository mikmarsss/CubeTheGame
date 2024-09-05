import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
    width: ${props => props.width || '165px'};
    height: ${props => props.height || '44px'};
    color: ${props => props.color || 'white'};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    background-color: ${props => props.backColor || 'inherit'};
    font-size: ${props => props.fontSize || '16px'};
    border-radius: 5px;
    border: none;
    border-bottom: ${props => props.backColor === '#37AC00' ? '1px solid #55F30A' : '1px solid #9159BE'};
    font-family: ${props => props.font || 'Inter-Regular'};
    font-size:${props => props.fontSize || '16px'};
    cursor:${props => props.cursor || 'pointer'};

    &:hover {
        background-color: ${props => props.backColor === '#37AC00' ? '#41CA00' : '#8151A8'};
        border-bottom: ${props => props.backColor === '#37AC00' ? '1px solid #7DFF3F' : '1px solid #AB69E2'};
    }

    &:active {
        background-color: ${props => props.activeBgColor || '#563570'};
        border-bottom: ${props => props.activeBb || '1px solid #7D5CA8'};
    }
`;



const Button = ({ children, width, height, color, ml, mr, mb, mt, backColor, font, fontSize, bb, cursor }) => {
    return (
        <>
            <StyledButton width={width} height={height} color={color} ml={ml} mr={mr} mb={mb} mt={mt} backColor={backColor} font={font} fontSize={fontSize} bb={bb} cursor={cursor}>
                {children}
            </StyledButton>
        </>
    )
}

export default Button