import React, { useEffect, useState } from 'react'
import axiosClient from '../Axios/axiosClient'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import Post from '../Components/Post/Post'
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Menu, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, removeDeletedPost } from '../Redux/posts'
import { openModal } from "../Redux/postModalSlice";
import { updateSelectPost } from "../Redux/selectedPostDataSlice";
import { fetchUser } from '../Redux/userDataSlice';

const Home = () => {
  const posts = useSelector((state) => state.posts);
  const [anchorEl, setAnchorEl] = useState([]);
  const open = Boolean(anchorEl);
  const userData = useSelector((state) => state.user.user);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchPosts());
  }, [])

   useEffect(() => {
     dispatch(fetchUser());
   }, []);


  const deletePost = (postId) => {
    axiosClient
      .delete(`/post/${postId}`)
      .then((response) => {
        dispatch(removeDeletedPost(postId));
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };
  

  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };

  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
  };

  const openUpdateModal = (product) => {
    dispatch(openModal());
    dispatch(updateSelectPost(product));
  }


 
  const handlePermission = (post) => {
    if (
      userData &&
      userData.id &&
      userData.roles &&
      userData.roles.length > 0 &&
      (userData.id === post.user.id || userData.roles[0].name === "admin")
    ) {
      return true;
    }
    return false;
  };

  
  return (
    <AuthenticatedLayout>
      <div className="flex flex-col gap-6">
        {posts.posts.data &&
          posts.posts.data.map((post, index) => (
            <>
              <Post props={post} openModal={handleClick} isOpen={open} />
              {handlePermission(post) && (
                <Menu
                  MenuListProps={{
                    "aria-labelledby": `long-button-${post.id}`,
                  }}
                  id={`menu-${post.id}`}
                  anchorEl={anchorEl[post.id]}
                  open={Boolean(anchorEl[post.id])}
                  onClose={() => handleClose(post.id)}
                  PaperProps={{
                    style: {
                      maxHeight: 48 * 4.5,
                    },
                  }}
                >
                  <MenuItem onClick={() => openUpdateModal(post)}>
                    <EditIcon sx={{ color: "#818cf8", marginRight: "10px" }} />
                    Edit
                  </MenuItem>
                  <MenuItem onClick={() => deletePost(post.id)}>
                    <DeleteIcon
                      sx={{ color: "#818cf8", marginRight: "10px" }}
                    />
                    Delete
                  </MenuItem>
                </Menu>
              )}
            </>
          ))}
      </div>
    </AuthenticatedLayout>
  );
}

export default Home