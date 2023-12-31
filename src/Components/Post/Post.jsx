import React, { useEffect, useState } from 'react'
import PersonAvatar from '../../assets/personimg.jpg';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ImagesLayout from '../../Layouts/ImagesLayout';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FormatTimeAgo from '../FormatTimeAgo';
import CommentModal from '../Comment/CommentModal';
import axiosClient from '../../Axios/axiosClient';
import { useDispatch, useSelector } from 'react-redux';
import { updatePostAfterFavorite, updatePostAfterVote } from '../../Redux/posts';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {removeFavoritePost } from '../../Redux/favoritedPostsSlice';
import Pusher from "pusher-js";
import { echo } from '../../Config/Broadcasting';
import { updateNotifications } from '../../Redux/notificationsSlice';
import { Link } from 'react-router-dom';

const Post = ({props, openModal, isOpen}) => {
  const timeAgo = FormatTimeAgo(props.created_at);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch()

   const handleVote = (postId, upvote) => {
     const voteValue = upvote ? 1 : -1;
     axiosClient
       .post(`/post/upvote/${postId}`, postId)
       .then((res) => {
         dispatch(
           updatePostAfterVote({
             id: postId,
             voteValue: voteValue,
             upvote: upvote,
           })
         );
         const likeChannel = echo.private("like-channel." + postId);
         likeChannel.listen(".new-like", (data) => {
           console.log("Like notification received:", data);
           dispatch(updateNotifications(data));
         });
         
       })
       .catch((err) => {
         console.log(err);
       });
   };

   const handleFavorite = (id, favorite) => {
     axiosClient
       .post(`/posts/${id}/favorite`)
       .then((res) => {
        
         dispatch(
           updatePostAfterFavorite({
             id: id,
             favorite: favorite,
           })
         );
         dispatch(removeFavoritePost(id));
       })
       .catch((err) => {
         console.log(err);
       });
   };

  //  const updatedFavoritePost = {
  //    ...favoritePosts.find((post) => post.id === id),
  //    has_favorited: favorite,
  //  };
  //  dispatch(fetchFavoritedPosts([...favoritePosts, updatedFavoritePost]));




  // useEffect(() => {
  //   const likeChannel = echo.private("like-channel." + props.id);
  
  //   likeChannel.listen(".new-like", (data) => {
  //     console.log("Like notification received:", data);
  //     dispatch(updateNotifications(data))
  //   });

  //   return () => {
  //     likeChannel.stopListening(".new-like");
  //   };
  // }, [id]);



  
  return (
    <>
      <div className="w-full rounded-xl bg-gray-100 p-4 flex flex-col gap-4 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={PersonAvatar}
              className="h-14 w-14 rounded-full object-cover"
              // style={{border:"3px solid white"}}
            />
            <div className="flex flex-col gap-1">
              <Link
                to={`/user/${props.user.id}`}
                className="text-[20px] font-medium"
              >
                {props.user.name}
              </Link>
             
              <p className="text-gray-500 ">{timeAgo}</p>
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
              <button onClick={() => handleVote(props.id, !props.has_voted)}>
                {props.has_voted ? (
                  <FavoriteOutlinedIcon sx={{ color: "red" }} />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </button>
              <p>{props.votes} Likes</p>
            </div>
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setIsCommentModalOpen(!isCommentModalOpen)}
            >
              <TextsmsOutlinedIcon />
              <p>Comments</p>
            </div>
          </div>
          <button
            onClick={() => handleFavorite(props.id, !props.has_favorited)}
          >
            {props.has_favorited ? (
              <BookmarkIcon sx={{ color: "#6b21a8" }} />
            ) : (
              <BookmarkBorderOutlinedIcon />
            )}
          </button>
        </div>
      </div>
      <CommentModal
        isOpen={isCommentModalOpen}
        closeModal={() => setIsCommentModalOpen(false)}
        post={props}
      />
    </>
  );
}

export default Post