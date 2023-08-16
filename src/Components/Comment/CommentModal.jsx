import { Box, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react'
import PersonAvatar from "../../assets/personimg.jpg";
import SendIcon from "@mui/icons-material/Send";
import CommentInputGroup from './CommentInputGroup';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyIcon from "@mui/icons-material/Reply";
import axiosClient from '../../Axios/axiosClient';
import FormatTimeAgo from '../FormatTimeAgo';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const style = {
  position: "fixed",
  outline:"none",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: 600,
  bgcolor: "background.paper",
  boxShadow: 14,
  borderRadius: 1,
  
  maxHeight: "95vh",
  overflowY: "auto",
  scrollbarWidth: "thin",
  scrollbarColor: "#888 transparent",
  zIndex: 9999,
};


const CommentModal = ({isOpen, closeModal, post}) => {
    const [comments, setComments] = useState([]);
    const [showReplyInput, setShowReplyInput] = useState({});
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editedCommentText, setEditedCommentText] = useState("");
    useEffect(() => {
        axiosClient.get(`/comment/${post.id}`)
        .then((res) => {
            setComments(res.data.data)
        })
    },[])

    const toggleReplyInput = (commentId) => {
      setShowReplyInput((prev) => ({
        ...prev,
        [commentId]: !prev[commentId],
      }));
    };

      const deleteComment = (id) => {
        axiosClient
          .delete(`/comment/${id}`)
          .then((response) => {
            const deletedIndex = comments.findIndex(
              (comment) => comment.id === id
            );
            const updatedComments = [...comments];
            updatedComments.splice(deletedIndex, 1);
            setComments(updatedComments);
          })
          .catch((error) => {
            console.error("Error deleting product:", error);
          });
      };

      const editComment = (id, newText) => {
        axiosClient
          .put(`/comment/${id}`, { body: newText, post_id:post.id }) 
          .then((response) => {
            const updatedComments = comments.map((comment) =>
              comment.id === id ? { ...comment, body: newText } : comment
            );
            setComments(updatedComments);
            setEditingCommentId(null); 
          })
          .catch((error) => {
            console.error("Error editing comment:", error);
          });
      };

   
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" noValidate autoComplete="off">
          {comments.map((comment) => (
            <div className="flex flex-col gap-4 p-4">
              <div className="flex gap-3">
                <img
                  src={PersonAvatar}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  {editingCommentId === comment.id ? (
                    <div className="bg-gray-200 rounded-xl p-3 flex gap-2">
                      <textarea
                        name="body"
                        rows="1"
                        cols="10"
                        wrap="soft"
                        placeholder="Write Comment"
                        className="rounded px-4 py-2 outline-none w-full overflow-hidden resize-none bg-transparent "
                        value={editedCommentText}
                        onChange={(e) => setEditedCommentText(e.target.value)}
                        style={{ wordWrap: "break-word" }}
                      ></textarea>
                      <button
                        type="button"
                        onClick={() =>
                          editComment(comment.id, editedCommentText)
                        }
                      >
                        <SendIcon />
                      </button>
                    </div>
                  ) : (
                    <div className="bg-gray-200 rounded-xl p-3">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{comment.user.name}</p>
                        <p className="text-sm text-gray-400">
                          {FormatTimeAgo(comment.created_at)}
                        </p>
                      </div>
                      <p>{comment.body}</p>
                    </div>
                  )}
                  <div className="flex items-center justify-between gap-4 mt-2">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <FavoriteBorderIcon />
                        <p>Like</p>
                      </div>
                      <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => toggleReplyInput(comment.id)}
                      >
                        <ReplyIcon />
                        <p>Reply</p>
                      </div>
                      <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => deleteComment(comment.id)}
                      >
                        <DeleteIcon />
                        <p>Delete</p>
                      </div>
                      <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => {
                          setEditingCommentId(comment.id);
                          setEditedCommentText(comment.body);
                        }}
                      >
                        <EditIcon />
                        <p>Edit</p>
                      </div>
                    </div>
                    {showReplyInput[comment.id] && (
                      <CommentInputGroup
                        postId={post.id}
                        setComments={setComments}
                        comments={comments}
                        parentCommentId={comment.id}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="p-4  w-full shadow-2xl static">
            <CommentInputGroup
              postId={post.id}
              setComments={setComments}
              comments={comments}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default CommentModal