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
    display: ${props => props.display};
    flex-direction:${props => props.fd};
    align-items:${props => props.ai};
    justify-content:${props => props.jc};
    gap:${props => props.gap};
    opacity:${props => props.opacity};

    &:hover {
        background-color: ${props => props.bgHover || 'none'};
        border-bottom: ${props => props.bbHover || 'none'};
    }

   &.active {
    background-color: #F6A200;
    border:1px solid #D77400;
   }

     &:disabled {
    opacity: 0.3;
    cursor: not-allowed; 
    pointer-events: none; 
  }
`;



const Button = ({ onClick, disabled, display, fd, ai, opacity, jc, gap, transform, isActive, top, left, position, bgHover, children, width, bbHover, height, color, ml, mr, mb, mt, backColor, font, fontSize, bb, cursor }) => {
    return (
        <>
            <StyledButton disabled={disabled} onClick={onClick} opacity={opacity} gap={gap} display={display} fd={fd} ai={ai} jc={jc} className={isActive ? 'active' : ''} transform={transform} left={left} top={top} bgHover={bgHover} bbHover={bbHover} position={position} width={width} height={height} color={color} ml={ml} mr={mr} mb={mb} mt={mt} backColor={backColor} font={font} fontSize={fontSize} bb={bb} cursor={cursor}>
                {children}
            </StyledButton>
        </>
    )
}

export default Button