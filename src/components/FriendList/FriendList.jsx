import React from 'react';
// import ReactDOM from 'react-dom/client';
import { RenderOneFriend } from './FriendElem';
import { ContainerFriends,ListFriends } from './friends.styled';
// import friends from './friends.json'

export const RenderFriends = () => {
    return (
    <ContainerFriends>
      <ListFriends>
        <RenderOneFriend/>
      </ListFriends>
  </ContainerFriends>)
}