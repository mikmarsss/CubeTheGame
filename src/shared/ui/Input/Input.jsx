import React from "react";
import styled from 'styled-components';

const StyledInput = styled.input`
    width: ${props => props.width || '338px'};
    height: ${props => props.height || '40px'};
    color: ${props => props.color || 'black'};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    font-size: ${props => props.fontSize || '16px'};
    font-family: ${props => props.font || 'Inter-Regular'};
    font-size:${props => props.fontSize || '16px'};
    background-color: ${props => props.backColor};
    border:${props => props.border || 'solid #CBD5E1 1px'};
    border-radius:${props => props.borderRadius || '6px'};
    padding-left: 12px;
    box-sizing: border-box;

    &:focus{
        border:${props => props.errorr ? 'solid #FF0000 1px' : 'solid #3893FF 1px'};
        outline:none;
    }
`;



const Input = ({ value, errorr, backColor, border, borderRadius, type, placeholder, width, height, color, ml, mr, mb, mt, font, fontSize, onChange }) => {
    return (
        <>
            <StyledInput errorr={errorr} value={value} border={border} borderRadius={borderRadius} backColor={backColor} onChange={onChange} type={type} placeholder={placeholder} width={width} height={height} color={color} ml={ml} mr={mr} mb={mb} mt={mt} font={font} fontSize={fontSize} />

        </>
    )
}

export default Input