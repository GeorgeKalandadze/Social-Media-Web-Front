import { Box, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react'
import PersonAvatar from "../../assets/personimg.jpg";
import SendIcon from "@mui/icons-material/Send";
import CommentInputGroup from './CommentInputGroup';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyIcon from "@mui/icons-material/Reply";
import axiosClient from '../../Axios/axiosClient';
import FormatTimeAgo from '../FormatTimeAgo';


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
    const [comments, setComments] = useState([])
    useEffect(() => {
        axiosClient.get(`/comment/${post.id}`)
        .then((res) => {
            setComments(res.data.data)
        })
    },[])

   
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
                  {comment.user && (
                    <div className="bg-gray-200 rounded-xl p-3">
                      <p className="font-medium">{comment.user.name}</p>
                      <p>{comment.body}</p>
                    </div>
                  )}
                  <div className="flex items-center justify-between gap-4 mt-2">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <FavoriteBorderIcon />
                        <p>Like</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <ReplyIcon />
                        <p>Reply</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      {FormatTimeAgo(comment.created_at)}
                    </p>
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