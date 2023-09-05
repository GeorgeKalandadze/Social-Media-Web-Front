import { Box, Modal } from '@mui/material'
import React, { useEffect, useState, useMemo } from 'react'
import UploadImages from './UploadImages';
import InputGroup from './InputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../Redux/postModalSlice';
import { updateData } from '../../Redux/postDataSlice';
import  axiosClient, { getRequest } from '../../Axios/axiosClient';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import {  FormControl } from '@mui/material';
import { fetchPosts } from "../../Redux/posts";


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


const PostForm = ({open, close}) => {
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [filteredSubcategories, setFilteredSubcategories] = useState([]);
    const [errors, setErrors] = useState({});
    const data = useSelector((state) => state.postData);
    const posts = useSelector((state) => state.posts.posts.data);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        const newData = { [name]: value };
        dispatch(updateData(newData));
    };
    const selectedPost = useSelector((state) => state.selectedPostData);    
    const updatedData = {
      title: selectedPost.title || "",
      body: selectedPost.body || "",
      sub_category_id: selectedPost.subcategory?.id || "",
      images: selectedPost.images || [],
    };
  

    useEffect(() => {
      if (close) {
        setErrors({});
      }
    }, [close]);


      useEffect(() => {
          if (selectedPost) {
            
            dispatch(updateData(updatedData));
          } else {
            dispatch(
              updateData({
                title: "",
                body: "",
                sub_category_id: null,
                images: [],
              })
            );
          
        }
      }, [dispatch, open, selectedPost]);
    

    useEffect(() => {
        getRequest('/categories')
        .then((res) => {
            setCategories(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    const handleCategoryChange = (e) => {
        const selectedCategoryId = e.target.value;
        const selectedCategory = categories.find((category) => category.id === selectedCategoryId);
        setSelectedCategory(selectedCategoryId);
        setFilteredSubcategories(selectedCategory?.sub_categories || []);
        setSelectedSubcategory('');
    };

    const makePost = () => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('body', data.body);
        formData.append('sub_category_id', data.sub_category_id);
          data.images.forEach((image, index) => {
            formData.append(
              `images[${index}]`,
              new File([image], image.name, { type: "image/jpg" })
            );
          });

        const requestMethod =
          Object.keys(selectedPost).length > 0
            ? axiosClient.post
            : axiosClient.post;
            
        const requestUrl =
          Object.keys(selectedPost).length > 0
            ? `/post/update/${selectedPost.id}`
            : "/post/create";

        requestMethod(requestUrl, formData)
        .then((res) => {
          if (selectedPost) {
            const updatedPost = res.data.data;
            const updatedPosts = posts.map((post) =>
              post.id === updatedPost.id ? updatedPost : post
            );
            dispatch(fetchPosts(updatedPosts));
          } else {
            const createdPost = res.data.data;
            const updatedPosts = [...posts, createdPost];
            dispatch(fetchPosts(updatedPosts));
          }
        })
        .catch((err) => {
            const response = err.response;
            if (response && response.status === 422) {
              setErrors(response.data.errors);
            }
        })
    }


  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" noValidate autoComplete="off">
          <h1 className="text-center text-[26px] font-bold text-gray-500 opacity-40 mb-4">
            Create New Post
          </h1>
          <UploadImages selectedImages={selectedPost.images} />
          <p className="text-red-600 mt-2">
            {errors.images?.[0] && errors.images?.[0]}
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <label className=" text-[18px] text-gray-400 mb-2">Category</label>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Category"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="mt-4 flex flex-col gap-2 mb-4">
            <label className=" text-[18px] text-gray-400 mb-2">
              Subcategory
            </label>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Subcategory</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Subcategory"
                value={selectedSubcategory}
                name="sub_category_id"
                onChange={(e) => {
                  setSelectedSubcategory(e.target.value);
                  handleInputChange(e);
                }}
              >
                {filteredSubcategories.map((subcategory) => (
                  <MenuItem key={subcategory.id} value={subcategory.id}>
                    {subcategory.name}
                  </MenuItem>
                ))}
              </Select>
              <p className="text-red-600 mt-2">
                {errors.sub_category_id?.[0] && errors.sub_category_id?.[0]}
              </p>
            </FormControl>
          </div>
          <InputGroup
            label="Title"
            placeholder="Enter Title for post"
            name={"title"}
            value={data.title}
            onChange={handleInputChange}
            error={errors.title?.[0]}
            className="border-gray-200 border-2"
          />
          <InputGroup
            label="Content"
            placeholder="Enter Content for post rounded"
            name={"body"}
            value={data.body}
            onChange={handleInputChange}
            error={errors.body?.[0]}
            className="border-gray-200 border-2 rounded"
          />
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="mt-6 bg-[#423dce] text-white px-6 py-3 font-medium rounded"
              onClick={() => makePost()}
            >
              {Object.keys(selectedPost).length !== 0 ? "Edit" : "Create"} Post
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
  );
}

export default PostForm