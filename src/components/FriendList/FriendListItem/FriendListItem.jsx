import {AvatarFriend,DivActivity,ListFriendElem} from './ListItem.styled';


export const FriendListItem = (prop) => {
   return prop.elem.frien.map(elem =>
    <ListFriendElem key={elem.id} id={elem.id}>
        <DivActivity active={elem.isOnline}></DivActivity>
        <AvatarFriend src={elem.avatar} alt="" />
        <div>{elem.name}</div>
    </ListFriendElem>
   )
}
