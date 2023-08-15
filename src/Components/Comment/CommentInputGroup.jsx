import React from 'react'
import PersonAvatar from "../../assets/personimg.jpg";
import SendIcon from "@mui/icons-material/Send";

const CommentInputGroup = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={PersonAvatar}
        className="h-10 w-10 rounded-full object-cover"
      />
      <textarea
        name="body"
        rows="1"
        cols="10"
        wrap="soft"
        placeholder="Write Comment"
        className="rounded px-4 py-2 outline-none w-full overflow-hidden resize-none bg-gray-100 "
        // value={commentText}
        // onChange={handleCommentChange}
        style={{ wordWrap: "break-word" }}
      ></textarea>
      <button>
        <SendIcon />
      </button>
    </div>
  );
}

export default CommentInputGroup