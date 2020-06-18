import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot
}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="José Nery" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Iury da Silva Abreu" isBot />
      {Array.from(Array(20), (e, i) => {
        return <UserRow nickname="Fulando" />
      })}
    </Container>
  );
};

export default UserList;