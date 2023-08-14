import React, { useState } from 'react'
import PersonAvatar from '../../assets/personimg.jpg';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ImagesLayout from '../../Layouts/ImagesLayout';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = ({props, openModal, isOpen}) => {
    
   
  return (
    <div className="w-full rounded-xl bg-gray-100 p-4 flex flex-col gap-4 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={PersonAvatar}
            className="h-14 w-14 rounded-full object-cover"
            // style={{border:"3px solid white"}}
          />
          <div className="flex flex-col gap-1">
            <p className="text-[20px] font-medium">{props.user.name}</p>
            <p className="text-gray-500 ">16 Hours ago</p>
          </div>
        </div>
        <IconButton
          id={`long-button-${props.id}`}
          aria-controls={isOpen ? `long-menu-${props.id}` : undefined}
          aria-expanded={isOpen ? "true" : undefined}
          aria-haspopup="true"
          onClick={(event) => openModal(event, props.id)}
        >
          <MoreVertIcon />
        </IconButton>
      </div>
      <p className="font-medium">{props.body}</p>
      <ImagesLayout fileList={props.images} />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <FavoriteOutlinedIcon />
            <p>0 Likes</p>
          </div>
          <div className="flex items-center gap-3">
            <TextsmsOutlinedIcon />
            <p>Comments</p>
          </div>
        </div>
        <BookmarkBorderOutlinedIcon />
      </div>
    </div>
  );
}

export default Post