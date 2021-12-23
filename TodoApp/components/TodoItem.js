import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';
import Check_Icon from '../assets/icons/check_white/check_white.png';

const TodoItem = ({id, text, done}) => (
  <Wrap>
    <Circle done={done}>{done && <Image source={Check_Icon} />}</Circle>
    <Title done={done}>{text}</Title>
  </Wrap>
);

const Wrap = styled.View`
  flex-direction: row;
  padding: 16px;
  align-items: center;
  border-bottom-color: #e0e0e0;
`;

const Circle = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border-color: #26a69a;
  border-width: 1px;
  margin-right: 16px;
  justify-content: ${props => (props.done ? 'center' : 'flex-start')};
  align-items: ${props => (props.done ? 'center' : 'auto')};
  background-color: ${props => (props.done ? '#26a69a' : 'white')};
`;

const Title = styled.Text`
  flex: 1;
  font-size: 16px;
  color: ${props => (props.done ? '#9e9e9e' : '#212121')};
  text-decoration-line: ${props => (props.done ? 'line-through' : 'none')};
`;

export default TodoItem;