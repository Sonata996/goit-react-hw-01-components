import React from 'react';
import { ContainerFriends,ListFriends} from './friends.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';
export const RenderFriends = (prop) => {
    return (
    <ContainerFriends>
      <ListFriends>
          {prop.friends.map(elem => <FriendListItem
            key={elem.id}
            id={elem.id}
            avatar={elem.avatar}
            name={elem.name}
            isOnline={elem.isOnline}/>)}
      </ListFriends>
  </ContainerFriends>)
}