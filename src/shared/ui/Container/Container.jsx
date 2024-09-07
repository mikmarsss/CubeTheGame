import React from "react";
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};;
    min-height:${props => props.minHeight || 'auto'};
    background-color: ${props => props.backColor};
    background: ${props => props.backColor ? props.backColor : 'linear-gradient(to right, #0C0B1E, #2A0F3B, #0C0B1E)'} ;
    position: ${props => props.position || 'static'};
    display: ${props => props.display || 'block'};
    flex-direction: ${props => props.fd || 'none'};
    align-items: ${props => props.ai || 'none'};
    justify-content: ${props => props.jc || 'none'};
    flex-grow: ${props => props.fg || 'none'};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    border: ${props => props.border};
    top: ${props => props.top};
    left: ${props => props.left};
    transform:${props => props.transform};
    border-radius:${props => props.br};
    z-index:${props => props.zIndex};
    opacity: ${props => props.opacity};
    gap: ${props => props.gap};

`;

const Container = ({ children, gap, opacity, zIndex, br, height, minHeight, width, position, backColor, display, fd, ai, jc, fg, mt, mr, ml, mb, border, top, left, transform }) => {
    return (
        <>
            <StyledContainer zIndex={zIndex} gap={gap} opacity={opacity} border={border} br={br} height={height} backColor={backColor} minHeight={minHeight} width={width} position={position} transform={transform} display={display} fd={fd} ai={ai} jc={jc} fg={fg} mt={mt} mr={mr} ml={ml} mb={mb} top={top} left={left}>
                {children}
            </StyledContainer>
        </>
    )
}

export default Container