import React, { useState } from 'react'
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
import { fetchPosts } from '../../Redux/posts';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { fetchFavoritedPosts } from '../../Redux/favoritedPostsSlice';

const Post = ({props, openModal, isOpen}) => {
  const timeAgo = FormatTimeAgo(props.created_at);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const posts = useSelector((state) => state.posts.posts.data);
  const favoritePosts = useSelector(
    (state) => state.favoritePosts.favoritePosts
  );
  const dispatch = useDispatch()

  const upVote = (postId) => {
    axiosClient
      .post(`/post/upvote/${postId}`, postId)
      .then((res) => {
        if (res.data === "upVoted") {
          const updatedPosts = posts.map((post) => {
            if (post.id === postId) {
              return {
                ...post,
                votes: post.votes + 1,
                has_voted: true,
              };
            }
            return post;
          });
          dispatch(fetchPosts(updatedPosts));
        } else {
          const updatedPosts = posts.map((post) => {
            if (post.id === postId) {
              return {
                ...post,
                votes: post.votes - 1,
                has_voted: false,
              };
            }
            return post;
          });
          dispatch(fetchPosts(updatedPosts));
        }
        
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const addTofavorites = (id) => {
    axiosClient.post(`/posts/${id}/favorite`)
    .then((res) => {
      console.log(res,"response")
      if(res.data === "favorited"){
        const updatedPosts = posts.map((post) => {
          if (post.id === id) {
            return {
              ...post,
              has_favorited: true,
            };
          }
          return post;
        });
        dispatch(fetchPosts(updatedPosts));
      }else{
        const updatedPosts = posts.map((post) => {
          if (post.id === id) {
            return {
              ...post,
              has_favorited: false,
            };
          }
          return post;
        });
        dispatch(fetchPosts(updatedPosts));
        // const deletedIndex = favoritePosts.findIndex(
        //   (favoritePost) => favoritePost.id === id
        // );
        // const favoritePost = [...favoritePosts];
        // favoritePost.splice(deletedIndex, 1);
        // dispatch(fetchFavoritedPosts(favoritePost));
        
      }
    })
    .catch((err) => {
      console.log(err)
    });
  }


  console.log(props)

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
              <p className="text-[20px] font-medium">{props.user.name}</p>
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
              <button onClick={() => upVote(props.id)}>
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
          <button onClick={() => addTofavorites(props.id)}>
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