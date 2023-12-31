import React from "react";
import Navbar from "./Navbar/Navbar";
import LeftSide from "../Components/Home/LeftSide";
import RightSide from "../Components/Home/RightSide";
import PostForm from "../Components/Post/PostForm";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../Redux/postModalSlice";
import SideBar from "./Sidebar/Sidebar";
import NotificationModal from "../Components/NotificationModal";
import { closeNotificationModal } from "../Redux/notificationModalSlice";
import UpdateProfileModal from "../Components/UpdateProfileModal";
import { closeUpdateProfileModal } from "../Redux/updateProfileModalSlice";

const AuthenticatedLayout = ({ children }) => {
  const isPostModalOpen = useSelector((state) => state.postModal.isOpen);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };
  const isOpenSidebar = useSelector((state) => state.sidebar.isOpenSidebar);

  const isNotificationModalOpen = useSelector(
    (state) => state.notificationModal.isNotificationModal
  );

  const isOpenUpdateProfileModal = useSelector(
    (state) => state.updateProfileModal.isOpenUpdateProfileModal
  );

  return (
    <div>
      <Navbar />
      <PostForm 
        open={isPostModalOpen} 
        close={() => handleClose()} 
      />
      <NotificationModal
        open={isNotificationModalOpen}
        close={() => dispatch(closeNotificationModal())}
      />
      <UpdateProfileModal
        open={isOpenUpdateProfileModal}
        close={() => dispatch(closeUpdateProfileModal())}
      />
      <div
        className="
          py-0 px-[0px] grid grid-cols-[10vw,auto] gap-x-16
          lg:px-[100px] lg:grid-cols-[18vw,auto,22vw] 
          md:grid-cols-[22vw,auto,22vw] 
          sm:grid-cols-[1fr,2fr]  sm:px-[30px] sm:py-4
         "
      >
        <LeftSide />
        <SideBar />
        <div
          className={`py-4 mr-4 sm:py-0 sm:mr-0 ${
            isOpenSidebar ? "blurred" : ""
          }`}
        >
          {children}
        </div>
        <RightSide />
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
