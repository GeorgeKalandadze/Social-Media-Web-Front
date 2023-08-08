import { Box, Modal } from '@mui/material'
import React from 'react'

const PostForm = ({open, close}) => {
    const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    maxWidth: 800,
    bgcolor: 'background.paper',
    boxShadow: 14,
    borderRadius: 1,
    p: 4,
    maxHeight: '95vh',
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: '#888 transparent',
    zIndex: 9999
};
  return (
    <div>
        <Modal
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} component="form" noValidate autoComplete="off"></Box>
        </Modal>
    </div>
  )
}

export default PostForm