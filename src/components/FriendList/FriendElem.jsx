import React from 'react';
// import ReactDOM from 'react-dom/client';
import friends from './friends.json'
import { AvatarFriend,DivActivity,ListFriendElem } from './friends.styled';

export const RenderOneFriend = () => {

return friends.map(elem => <ListFriendElem key={elem.id} id={elem.id}>
        <DivActivity active={elem}></DivActivity>
        <AvatarFriend src={elem.avatar} alt="" />
        <div>{elem.name}</div>
</ListFriendElem>
)
}
