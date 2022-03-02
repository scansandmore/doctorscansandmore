import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <div className='userinfo'>  
    <Stack  direction="row" marginLeft={25} marginTop={-0.7} spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
      <div className='user-data-card'>
      <span className='user-name'>User Name</span>
      <span className='user-name'>Clinic Name</span>
      </div>
    </Stack>
    </div>  
  );
}
