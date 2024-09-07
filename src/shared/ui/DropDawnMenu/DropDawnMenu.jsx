import React from "react";
import styled, { css } from 'styled-components';

const StyledDropMenu = styled.button`
    /* width: ${props => props.width || '338px'};
    height: ${props => props.isOpen ? '223px' : '40px'};
    color: ${props => props.color || 'black'};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    background-color: ${props => props.backColor || 'white'};
    font-size: ${props => props.fontSize || '16px'};
    border-radius: 6px;
    border: ${props => props.isOpen ? '1px solid #3893FF' : '1px #CBD5E1 solid'};
    font-family: ${props => props.font || 'Inter-Regular'};
    font-size:${props => props.fontSize || '16px'};
    cursor:${props => props.cursor || 'pointer'};
    position:${props => props.position || 'static'};
    top:${props => props.top};
    left:${props => props.left};
    transform:${props => props.transform};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    box-sizing: border-box; */
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:transparent;
    border:none;
`;

const StyledDropButton = styled.button`
    width: ${props => props.width || '338px'};
    height: ${props => props.height || '40px'};
    color: ${props => props.color || 'black'};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    background-color: ${props => props.backColor || 'white'};
    font-size: ${props => props.fontSize || '16px'};
    border-radius: 6px;
    border: ${props => props.isOpen ? '1px solid #3893FF' : '1px #CBD5E1 solid'};
    font-family: ${props => props.font || 'Inter-Regular'};
    font-size:${props => props.fontSize || '16px'};
    cursor:${props => props.cursor || 'pointer'};
    position:${props => props.position || 'static'};
    top:${props => props.top};
    left:${props => props.left};
    transform:${props => props.transform};
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    padding-left: 12px;
`;

const StyledDropMenuValue = styled.div`
    width: ${props => props.width || '338px'};
    height: ${props => props.height || '181px'};
    color: ${props => props.color || 'black'};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    background-color: ${props => props.backColor || 'white'};
    font-size: ${props => props.fontSize || '16px'};
    border-radius: 6px;
    border: ${props => props.isOpen ? '1px solid #3893FF' : '1px #CBD5E1 solid'};
    font-family: ${props => props.font || 'Inter-Regular'};
    font-size:${props => props.fontSize || '16px'};
    cursor:${props => props.cursor || 'pointer'};
    transform:${props => props.transform};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    padding-left: 12px;
    overflow-y: auto;
`;

const DropDawnMenu = ({ onClick, isOpen, transform, top, left, position, children, width, height, color, ml, mr, mb, mt, backColor, font, fontSize, cursor, options }) => {
    return (
        <>
            <StyledDropMenu onClick={onClick} isOpen={isOpen} transform={transform} left={left} top={top} position={position} width={width} height={height} color={color} ml={ml} mr={mr} mb={mb} mt={mt} backColor={backColor} font={font} fontSize={fontSize} cursor={cursor}>
                <StyledDropButton isOpen={isOpen} >
                    {children}
                    {
                        !isOpen &&
                        <div style={{
                            width: '6px',
                            height: '6px',
                            borderTop: '1.33px solid #94A3B8',
                            borderRight: '1.33px solid #94A3B8',
                            transform: 'rotate(135deg)',
                            marginLeft: 'auto',
                            marginRight: '16px',
                        }}>
                        </div>
                    }
                    {
                        isOpen &&
                        <div style={{
                            width: '6px',
                            height: '6px',
                            borderTop: '1.33px solid #94A3B8',
                            borderRight: '1.33px solid #94A3B8',
                            transform: 'rotate(-45deg)',
                            marginLeft: 'auto',
                            marginRight: '16px',
                        }}>
                        </div>
                    }

                </StyledDropButton>
                {
                    isOpen &&
                    <StyledDropMenuValue isOpen={isOpen}>
                        {options.map((option, index) => (
                            <div key={index} style={{ height: '24px', cursor: 'pointer' }}>
                                {option}
                            </div>
                        ))}
                    </StyledDropMenuValue>
                }
            </StyledDropMenu>

        </>
    )
}

export default DropDawnMenu;