import React from 'react';
import styled from 'styled-components';

const DiceContainer = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  background-color: white;
  border: 2px solid black;
  border-radius: 4.67px;
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

const Dice = ({ value, size, dotSize }) => {
    return (
        <DiceContainer size={size}>
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
        </DiceContainer>
    );
};

export default Dice;