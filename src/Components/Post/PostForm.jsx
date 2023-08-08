import { Box, Modal } from '@mui/material'
import React from 'react'
import UploadImages from './UploadImages';
import InputGroup from './InputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../Redux/postModalSlice';
import { updateData } from '../../Redux/postDataSlice';


const PostForm = ({open, close}) => {
    const dispatch = useDispatch();
    const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    maxWidth: 600,
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


const data = useSelector((state) => state.postData);

const handleInputChange = (event) => {
  const { name, value } = event.target;
  const newData = { [name]: value };
  dispatch(updateData(newData));
};

console.log(data)

  return (
    <div>
        <Modal
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} component="form" noValidate autoComplete="off">
                <h1 className="text-center text-[26px] font-bold text-gray-500 opacity-40 mb-4">Create New Post</h1>
                <UploadImages/>
                <InputGroup
                    label="Title"
                    placeholder="Enter Title for post"
                    name={"title"}
                    value={data.title}
                    onChange={handleInputChange}
                />
                <InputGroup
                    label="Content"
                    placeholder="Enter Content for post"
                    name={"body"}
                    value={data.body}
                    onChange={handleInputChange}
                />
                <div className="flex items-center justify-between">
                    <button
                        type="button"
                        className="mt-6 bg-[#423dce] text-white px-6 py-3 font-medium rounded"
                    >
                        Create Post
                    </button>
                    <button
                        type="button"
                        className="mt-6 bg-red-700 text-white px-6 py-3 font-medium rounded"
                        onClick={() => dispatch(closeModal())}
                    >
                        Close
                    </button>
                </div>
            </Box>
        </Modal>
    </div>
  )
}

export default PostForm