import { Box, Modal } from '@mui/material';
import React, { useState } from 'react'
import PersonAvatar from "../../assets/personimg.jpg";
import SendIcon from "@mui/icons-material/Send";
import CommentInputGroup from './CommentInputGroup';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyIcon from "@mui/icons-material/Reply";


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
  p: 2,
  maxHeight: "95vh",
  overflowY: "auto",
  scrollbarWidth: "thin",
  scrollbarColor: "#888 transparent",
  zIndex: 9999,
};


const CommentModal = ({isOpen, closeModal, post}) => {
    const [commentText, setCommentText] = useState("");

    const handleCommentChange = (event) => {
      setCommentText(event.target.value);
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
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <img
                src={PersonAvatar}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <div className="bg-gray-200 rounded-xl p-3">
                  <p className="font-medium">George Kala</p>
                  <p>
                    ტელეფონით ვცდილობ შეძენას და საერთოდ არ აჩვენებს ბილეთის
                    ფანჯარას
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-2">
                    <FavoriteBorderIcon />
                    <p>Like</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <ReplyIcon />
                    <p>Reply</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CommentInputGroup />
        </Box>
      </Modal>
    </div>
  );
}

export default CommentModal