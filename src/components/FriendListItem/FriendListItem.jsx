import {AvatarFriend,DivActivity,ListFriendElem} from './ListItem.styled';


export const FriendListItem = ({id,avatar,name,isOnline}) => {
   return <ListFriendElem key={id} id={id}>
        <DivActivity active={isOnline.toString()}></DivActivity>
        <AvatarFriend src={avatar} alt="" />
        <div>{name}</div>
    </ListFriendElem>
}
