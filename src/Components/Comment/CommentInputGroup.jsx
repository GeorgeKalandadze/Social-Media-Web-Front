import React, { useState } from 'react'
import PersonAvatar from "../../assets/personimg.jpg";
import SendIcon from "@mui/icons-material/Send";
import axiosClient from '../../Axios/axiosClient';

const CommentInputGroup = ({
  postId,
  setComments,
  comments,
  parentCommentId,
}) => {
  const [commentBody, setCommentBody] = useState("");

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
          console.log(res, "response");
          setComments([...comments, res.data.data]);
          setCommentBody("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  console.log(comments, "comments");

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