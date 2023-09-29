import React from 'react';
// import ReactDOM from 'react-dom/client';
import user from './user.json'
import { ContainerProfil, ProfilInfo, AvatarProfil,UserName,UserTag,UserLocation,ListActive,ListElem} from './profile.styled';

export const Profile = () => {
    return  (
<ContainerProfil>
  <ProfilInfo>
    <AvatarProfil
      src={user.avatar}
      alt="User avatar"
    />
    <UserName>{user.username}</UserName>
    <UserTag>@{user.tag}</UserTag>
    <UserLocation>{user.location}</UserLocation>
  </ProfilInfo>

  <ListActive>
    <ListElem>
      <span>Followers</span>
      <span>{user.stats.followers}</span>
    </ListElem>
    <ListElem>
      <span>Views</span>
      <span>{user.stats.views}</span>
    </ListElem>
    <ListElem>
      <span>Likes</span>
      <span>{user.stats.likes}</span>
    </ListElem>
  </ListActive>
</ContainerProfil>
    )
}