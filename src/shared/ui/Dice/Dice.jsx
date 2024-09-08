import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(720deg)  rotateY(720deg);
  }
`;

const DiceContainer = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  ${props => props.isRolling && css`
    animation: ${rotateAnimation} 2s linear infinite;
  `}
`;

const Face = styled.div`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  background-color: white;
  display: grid;
  grid-template-areas: 
    "a . c"
    "e g f"
    "d . b";
  padding: 10px;
  box-sizing: border-box;
  
`;

const Dot = styled.div`
  width: ${props => props.dotSize};
  height: ${props => props.dotSize};
  background-color: black;
  border-radius: 50%;
  align-self: center;
  justify-self: center;
`;

const Dice = ({ value, size, dotSize, isRolling }) => {


    const renderDots = (faceValue) => {
        switch (faceValue) {
            case 1:
                return <Dot dotSize={dotSize} style={{ gridArea: 'g' }} />;
            case 2:
                return (
                    <>
                        <Dot dotSize={dotSize} style={{ gridArea: 'a' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'b' }} />
                    </>
                );
            case 3:
                return (
                    <>
                        <Dot dotSize={dotSize} style={{ gridArea: 'a' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'g' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'b' }} />
                    </>
                );
            case 4:
                return (
                    <>
                        <Dot dotSize={dotSize} style={{ gridArea: 'a' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'c' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'd' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'b' }} />
                    </>
                );
            case 5:
                return (
                    <>
                        <Dot dotSize={dotSize} style={{ gridArea: 'a' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'c' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'g' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'd' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'b' }} />
                    </>
                );
            case 6:
                return (
                    <>
                        <Dot dotSize={dotSize} style={{ gridArea: 'a' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'c' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'e' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'f' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'd' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'b' }} />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <DiceContainer size={size} isRolling={isRolling}>

            <Face size={size} isRolling={isRolling} style={{ transform: `translateZ(45px)` }}>
                {renderDots(value)}
            </Face>
            <Face size={size} isRolling={isRolling} style={{ transform: `rotateY(90deg) translateZ(45px)` }}>
                {renderDots(2)}
            </Face>
            <Face size={size} isRolling={isRolling} style={{ transform: `rotateY(180deg) translateZ(45px)` }}>
                {renderDots(3)}
            </Face>
            <Face size={size} isRolling={isRolling} style={{ transform: `rotateY(-90deg) translateZ(45px)` }}>
                {renderDots(4)}
            </Face>
            <Face size={size} isRolling={isRolling} style={{ transform: `rotateX(90deg) translateZ(45px)` }}>
                {renderDots(5)}
            </Face>
            <Face size={size} isRolling={isRolling} style={{ transform: `rotateX(-90deg) translateZ(45px)` }}>
                {renderDots(6)}
            </Face>

            {/* <Face size={size} isRolling={isRolling} style={{ transform: 'translateZ(45px)' }}>
                {value === 1 && (
                    <Dot dotSize={dotSize} style={{ gridArea: 'g' }} />
                )}
                {value === 2 && (
                    <>
                        <Dot dotSize={dotSize} style={{ gridArea: 'a' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'b' }} />
                    </>
                )}
                {value === 3 && (
                    <>
                        <Dot dotSize={dotSize} style={{ gridArea: 'a' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'g' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'b' }} />
                    </>
                )}
                {value === 4 && (
                    <>
                        <Dot dotSize={dotSize} style={{ gridArea: 'a' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'c' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'd' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'b' }} />
                    </>
                )}
                {value === 5 && (
                    <>
                        <Dot dotSize={dotSize} style={{ gridArea: 'a' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'c' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'g' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'd' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'b' }} />
                    </>
                )}
                {value === 6 && (
                    <>
                        <Dot dotSize={dotSize} style={{ gridArea: 'a' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'c' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'e' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'f' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'd' }} />
                        <Dot dotSize={dotSize} style={{ gridArea: 'b' }} />
                    </>
                )}
            </Face>
            <Face size={'91px'} isRolling={isRolling} style={{ transform: 'rotateY(90deg) translateZ(45px)' }} />
            <Face size={'91px'} isRolling={isRolling} style={{ transform: 'rotateY(180deg) translateZ(45px)' }} />
            <Face size={'91px'} isRolling={isRolling} style={{ transform: 'rotateY(-90deg) translateZ(45px)' }} />
            <Face size={'91px'} isRolling={isRolling} style={{ transform: 'rotateX(90deg) translateZ(45px)' }} />
            <Face size={'91px'} isRolling={isRolling} style={{ transform: 'rotateX(-90deg) translateZ(45px)' }} /> */}
        </DiceContainer>
    );
};

export default Dice;