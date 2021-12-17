import React from 'react';
import styled from 'styled-components/native';
import EmptyImg from '../assets/images/young_and_happy.png';

const Empty = () => {
  return (
    <Container>
      <Image source={EmptyImg} />
      <Desc>야호! 할일이 없습니다.</Desc>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Desc = styled.Text`
  font-size: 24px;
  color: #9e9e9e;
`;

const Image = styled.Image`
  width: 240px;
  height: 179px;
  margin-bottom: 16px;
`;

export default Empty;
