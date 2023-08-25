import { Box, Modal } from '@mui/material'
import React from 'react'

const style = {
  position: "fixed",
  outline: "none",
  top: "12%",
  right: "16%",
  width:"400px",
  bgcolor: "background.paper",
  boxShadow: 14,
  borderRadius: 3,
  maxHeight: "95vh",
  overflowY: "auto",
  scrollbarWidth: "thin",
  scrollbarColor: "#888 transparent",
  zIndex: 9999,
  p:2
};

const NotificationModal = ({open, close}) => {
  return (
    <div>
      <Modal 
        open={open}
        onClose={close}
      >
        <Box sx={style}>
          <div className="flex justify-between">
            <h1 className="font-medium">
              All Notification{" "}
              <span className="bg-[#ffc107] text-white px-2 py-0.5 rounded-lg ml-2">
                0
              </span>
            </h1>
            <button className="text-[#45a7f5] underline ">Mark as all read</button>
          </div>
          <div className='py-[40px]'>
            <h1 className="text-center text-gray-400 text-[20px] font-bold">No notifications</h1>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default NotificationModal