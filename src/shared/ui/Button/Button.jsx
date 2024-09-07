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
    border-bottom: ${props => props.bb};
    font-family: ${props => props.font || 'Inter-Regular'};
    font-size:${props => props.fontSize || '16px'};
    cursor:${props => props.cursor || 'pointer'};
    position:${props => props.position || 'static'};
    top:${props => props.top};
    left:${props => props.left};
    transform:${props => props.transform};

    &:hover {
        background-color: ${props => props.bgHover || 'none'};
        border-bottom: ${props => props.bbHover || 'none'};
    }

    &:active {
        background-color: ${props => props.bgHover || '#563570'};
        border-bottom: ${props => props.activeBb || '1px solid #7D5CA8'};
    }
`;



const Button = ({ onClick, transform, top, left, position, bgHover, children, width, bbHover, height, color, ml, mr, mb, mt, backColor, font, fontSize, bb, cursor }) => {
    return (
        <>
            <StyledButton onClick={onClick} transform={transform} left={left} top={top} bgHover={bgHover} bbHover={bbHover} position={position} width={width} height={height} color={color} ml={ml} mr={mr} mb={mb} mt={mt} backColor={backColor} font={font} fontSize={fontSize} bb={bb} cursor={cursor}>
                {children}
            </StyledButton>
        </>
    )
}

export default Button