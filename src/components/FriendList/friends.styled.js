
import styled from 'styled-components'

export const ContainerFriends = styled.div`
background-color: #70726a;
color:#fff;
margin: auto;
max-width: 300px;
display: flex;
gap: 10px;
align-items: center;
flex-direction: column;
`
export const ListFriends = styled.ul`
display: flex;
width: 100%;
flex-direction: column;
list-style: none;
padding: 0;
margin: 0;
`

export const AvatarFriend = styled.img`
width: 50px;
`
export const DivActivity = styled.div`
border-radius:50%;
width:18px;
height:18px;
background-color:${(prop) =>{ 
    if (prop.active.isOnline) {
    return 'green'
}else{
    return 'red'
}
}};
`

export const ListFriendElem = styled.li`
background-color: #191a19;
display: flex;
align-items: center;
gap: 10px;
`