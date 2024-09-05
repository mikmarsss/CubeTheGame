import React from "react";
import styled from 'styled-components';

const StyledButton = styled.p`
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    color: ${props => props.color || 'white'};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    font-size: ${props => props.fontSize || '16px'};
    font-family: ${props => props.font || 'Inter-Regular'};
    font-size:${props => props.fontSize || '16px'};
    cursor:${props => props.cursor || 'static'};

`;



const Text = ({ children, width, height, color, ml, mr, mb, mt, font, fontSize, cursor }) => {
    return (
        <>
            <StyledButton width={width} height={height} color={color} ml={ml} mr={mr} mb={mb} mt={mt} font={font} fontSize={fontSize} cursor={cursor}>
                {children}
            </StyledButton>
        </>
    )
}

export default Text