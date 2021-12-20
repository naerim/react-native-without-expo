import React, {useState} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import BtnImg from '../assets/icons/add_white/add_white.png';

const AddTodo = () => {
  const [text, setText] = useState('');
  return (
    <Container>
      <Input
        placeholder="할일을 입력하세요. "
        value={text}
        onChangeText={setText}
      />
      <AddBtn>
        <Image source={BtnImg} />
      </AddBtn>
    </Container>
  );
};

const Container = styled.View`
  background-color: white;
  height: 64px;
  padding-horizontal: 16px;
  border-color: #bdbdbd;
  border-top-width: 1px;
  border-bottom-width: 1px;
  align-items: center;
  flex-direction: row;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding-vertical: 8px;
`;

const AddBtn = styled.View`
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: #26a69a;
  border-radius: 24px;
`;

export default AddTodo;
