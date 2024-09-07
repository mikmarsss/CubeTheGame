import React from 'react';
import styled from 'styled-components';

const Lines = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #94A3B8;
  transform: translateY(-50%) rotate(${props => props.angle}deg);
  
`;

const Cross = styled.div`
  position: relative;
  width:14px;
  height: 14px;
   cursor: pointer;
  &:hover ${Lines} {
        background-color: #CBE1FF;
    }
`;



const ExitButton = () => {
    return (
        <Cross>
            <Lines angle={45} />
            <Lines angle={-45} />
        </Cross>
    );
};

export default ExitButton;