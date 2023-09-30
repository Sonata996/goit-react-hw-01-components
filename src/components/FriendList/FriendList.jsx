import React from 'react';
import { ContainerFriends,ListFriends,AvatarFriend,DivActivity,ListFriendElem } from './friends.styled';

export const RenderFriends = (prop) => {
    return (
    <ContainerFriends>
      <ListFriends>
        {prop.frien.map(elem => <ListFriendElem key={elem.id} id={elem.id}>
          <DivActivity active={elem}></DivActivity>
          <AvatarFriend src={elem.avatar} alt="" />
        <div>{elem.name}</div>
      </ListFriendElem>
)}
      </ListFriends>
  </ContainerFriends>)
}