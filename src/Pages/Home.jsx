import React, { useEffect, useState } from 'react'
import axiosClient from '../Axios/axiosClient'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import Post from '../Components/Post/Post'
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Menu, MenuItem } from "@mui/material";


const Home = () => {
  const [posts, setPosts] = useState([]);
  const [anchorEl, setAnchorEl] = useState([]);
  const [openCreateProduct, setOpenCreateProduct] = useState(false);
  const open = Boolean(anchorEl);

  useEffect(() => {
    axiosClient.get('/posts')
    .then((res) => {
      setPosts(res.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

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

  return (
    <AuthenticatedLayout>
      <div className="flex flex-col gap-6">
        {posts.map((post, index) => (
          <>
            <Post 
              props={post} 
              openModal={handleClick}
              isOpen={open}
            />
            <Menu
              MenuListProps={{
                "aria-labelledby": `long-button-${post.id}`,
              }}
              id={`menu-${post.id}`}
              anchorEl={anchorEl[index]}
              open={Boolean(anchorEl[index])}
              onClose={() => handleClose(index)}
              PaperProps={{
                style: {
                  maxHeight: 48 * 4.5,
                },
              }}
            >
              <MenuItem>
                <EditIcon sx={{ color: "#818cf8", marginRight: "10px" }} />
                Edit
              </MenuItem>
              <MenuItem>
                <DeleteIcon sx={{ color: "#818cf8", marginRight: "10px" }} />{" "}
                Delete
              </MenuItem>
            </Menu>
          </>
        ))}
      </div>
    </AuthenticatedLayout>
  );
}

export default Home