import React from 'react'
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Menu, MenuItem } from "@mui/material";

const Menu = () => {
  return (
    <Menu
    //   MenuListProps={{
    //     "aria-labelledby": `long-button-${post.id}`,
    //   }}
    //   id={`menu-${post.id}`}
    //   anchorEl={anchorEl[post.id]}
    //   open={Boolean(anchorEl[post.id])}
    //   onClose={() => handleClose(post.id)}
      PaperProps={{
        style: {
          maxHeight: 48 * 4.5,
        },
      }}
    >
      <MenuItem >
        <EditIcon sx={{ color: "#818cf8", marginRight: "10px" }} />
        Edit
      </MenuItem>
      <MenuItem >
        <DeleteIcon sx={{ color: "#818cf8", marginRight: "10px" }} />
        Delete
      </MenuItem>
    </Menu>
  );
}

export default Menu