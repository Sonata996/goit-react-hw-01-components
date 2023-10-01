import styled from 'styled-components'


export const AvatarFriend = styled.img`
width: 50px;
`
export const DivActivity = styled.div`
border-radius:50%;
width:18px;
height:18px;
background-color:${(prop) =>{ 
    if (prop.active) {
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