import React, { useState } from 'react'
import PersonAvatar from "../../assets/personimg.jpg";
import SendIcon from "@mui/icons-material/Send";
import axiosClient from '../../Axios/axiosClient';
import { echo } from '../../Config/Broadcasting';
import { useDispatch } from 'react-redux';
import { updateNotifications } from '../../Redux/notificationsSlice';

const CommentInputGroup = ({
  postId,
  setComments,
  comments,
  parentCommentId,
}) => {

  const [commentBody, setCommentBody] = useState("");
  const dispatch = useDispatch()

  const makeComment = (e) => {
    e.preventDefault();
    if (commentBody) {
      const commentData = {
        body: commentBody,
        post_id: postId,
        parent_comment_id:parentCommentId ? parentCommentId: null,
      };
      axiosClient
        .post("/comment/create", commentData)
        .then((res) => {
          // if (res.data.data.parent_comment_id !== null){
              
          // }
          setComments([...comments, res.data.data]);
          setCommentBody("");
          const commentChannel = echo.private("comment-channel." + postId);
          commentChannel.listen(".new-comment", (data) => {
            console.log("comment notification received:", data);
            dispatch(updateNotifications(data));
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };



  return (
    <div className="flex items-center gap-2">
      <img src={PersonAvatar} className="h-10 w-10 rounded-full object-cover" />
      <textarea
        name="body"
        rows="1"
        cols="10"
        wrap="soft"
        placeholder="Write Comment"
        className="rounded px-4 py-2 outline-none w-full overflow-hidden resize-none bg-gray-100 "
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
        style={{ wordWrap: "break-word" }}
      ></textarea>
      <button type="button" onClick={makeComment}>
        <SendIcon />
      </button>
    </div>
  );
};

export default CommentInputGroup