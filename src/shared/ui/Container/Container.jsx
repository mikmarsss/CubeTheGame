import React from "react";
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};;
    min-height:${props => props.minHeight || 'auto'};
    background: linear-gradient(to right, #0C0B1E, #2A0F3B, #0C0B1E);
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
`;

const Container = ({ children, height, minHeight, width, position, display, fd, ai, jc, fg, mt, mr, ml, mb }) => {
    return (
        <>
            <StyledContainer height={height} minHeight={minHeight} width={width} position={position} display={display} fd={fd} ai={ai} jc={jc} fg={fg} mt={mt} mr={mr} ml={ml} mb={mb}>
                {children}
            </StyledContainer>
        </>
    )
}

export default Container