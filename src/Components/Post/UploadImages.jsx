import React, { useEffect, useRef, useState } from 'react'
import uploadImg from '../../assets/cloud-upload-regular-240.png';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../../Redux/postDataSlice';
import ImagesLayout from '../../Layouts/ImagesLayout';

const UploadImages = () => {
    const wrapperRef = useRef(null);
    const [fileList, setFileList] = useState([]);
    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');
    const dispatch = useDispatch(); 
    const postsData = useSelector(state => state.postData);
  
    const onFileDrop = (e) => {
      const newFiles = Array.from(e.target.files);
      if (newFiles.length > 0) {
        const updatedList = [...fileList, ...newFiles];
        setFileList(updatedList);
        dispatch(updateData({ images: updatedList }));
      }
    };
  
    useEffect(() => {
      dispatch(updateData({ images: fileList }));
    }, [fileList, dispatch]);


    return (
      <div className='border-[1.7px] border-gray-200 rounded p-2 mb-4'>
        {fileList.length === 0 ? (
          <div
            ref={wrapperRef}
            className=" relative w-full h-[300px] border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center bg-gray-100 hover:opacity-60 mt-2"
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            <div className="drop-file-input__label text-center text-gray-600 font-semibold p-2 flex flex-col items-center">
              <img src={uploadImg} alt="" className="w-24 rounded-full" />
              <p>Drag & Drop your Images here</p>
            </div>
            <input
              type="file"
              value=""
              onChange={onFileDrop}
              className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
              multiple
            />
          </div>
        ) : (
          <ImagesLayout fileList={fileList}/>
        )}
     
      </div>
    );
  };
  
  export default UploadImages;
  