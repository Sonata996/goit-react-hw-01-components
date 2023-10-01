import React from 'react';
import { ContainerFriends,ListFriends} from './friends.styled';
import { FriendListItem } from './FriendListItem/FriendListItem';
export const RenderFriends = (prop) => {
    return (
    <ContainerFriends>
      <ListFriends>
         <FriendListItem elem={prop}/>
      </ListFriends>
  </ContainerFriends>)
}