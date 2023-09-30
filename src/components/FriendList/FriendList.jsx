import React from 'react';
// import ReactDOM from 'react-dom/client';
import { ContainerFriends,ListFriends,AvatarFriend,DivActivity,ListFriendElem } from './friends.styled';
// import friends from './friends.json'

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