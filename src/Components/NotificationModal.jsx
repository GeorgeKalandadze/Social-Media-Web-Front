import { Box, Modal } from '@mui/material'
import React from 'react'
import PersonAvatar from "../assets/personimg.jpg";
import { useDispatch, useSelector } from 'react-redux';
import axiosClient from '../Axios/axiosClient';
import { markNotificationAsRead } from '../Redux/notificationsSlice';

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
  const notifications = useSelector((state) => state.notifications.notifications);
  const dispatch = useDispatch();


   const markAsRead = (notification) => {
     if (!notification.is_read) {
       
       axiosClient
         .put(`/notifications/${notification.id}`)
         .then((response) => {
           console.log(response.data.message);
           dispatch(markNotificationAsRead(notification));
         })
         .catch((error) => {
           console.error(error);
         });
     }
   };

   const markAllNotificationsAsRead = () => {
     axiosClient
       .patch('/notifications/markAllAsRead')
       .then((response) => {
         console.log(response.data.message);
         notifications.forEach((notification) => {
           if (!notification.is_read) {
             dispatch(markNotificationAsRead(notification));
           }
         });
       })
       .catch((error) => {
         console.error(error);
       });
   };

  console.log(notifications, "render not");
  return (
    <div>
      <Modal open={open} onClose={close}>
        <Box sx={style}>
          <div className="flex justify-between  py-2">
            <h1 className="font-medium">
              All Notification{" "}
              <span className="bg-[#ffc107] text-white px-2 py-0.5 rounded-lg ml-2">
                {notifications.length}
              </span>
            </h1>
            <button className="text-[#45a7f5] underline " onClick={() => markAllNotificationsAsRead()}>
              Mark as all read
            </button>
          </div>
          {notifications.length === 0 ? (
            <div className="py-[40px]">
              <h1 className="text-center text-gray-400 text-[20px] font-bold">
                No notifications
              </h1>
            </div>
          ) : (
            <div className="flex flex-col mt-2 gap-2">
              {notifications.map((not) => (
                <div
                  className={`flex cursor-pointer rounded px-2 items-center gap-3 py-2 ${
                    not.is_read ? "" : "border-[1.6px] border-green-300"
                  }`}
                  onClick={() => markAsRead(not)}
                >
                  <img
                    src={PersonAvatar}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-3">
                    <h1 className="text-[#656b83]">
                      <span className="font-bold text-black">
                        {not.author_name}
                      </span>{" "}
                      {not.message}
                    </h1>
                    <p className="text-sm text-gray-400">3 min ago</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default NotificationModal