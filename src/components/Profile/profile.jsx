import React from 'react';
import { ContainerProfil, ProfilInfo, AvatarProfil,UserName,UserTag,UserLocation,ListActive,ListElem} from './profile.styled';

export const Profile = (prop) => {
    return  (
<ContainerProfil>
  <ProfilInfo>
    <AvatarProfil
      src={prop.prof.avatar}
      alt="User avatar"
    />
    <UserName>{prop.prof.username}</UserName>
    <UserTag>@{prop.prof.tag}</UserTag>
    <UserLocation>{prop.prof.location}</UserLocation>
  </ProfilInfo>

  <ListActive>
    <ListElem>
      <span>Followers</span>
      <span>{prop.prof.stats.followers}</span>
    </ListElem>
    <ListElem>
      <span>Views</span>
      <span>{prop.prof.stats.views}</span>
    </ListElem>
    <ListElem>
      <span>Likes</span>
      <span>{prop.prof.stats.likes}</span>
    </ListElem>
  </ListActive>
</ContainerProfil>
    )
}