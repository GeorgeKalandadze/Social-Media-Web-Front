import React, { useEffect, useRef, useState } from 'react'
import uploadImg from '../../assets/cloud-upload-regular-240.png';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../../Redux/postDataSlice';

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

    console.log(postsData)

    const customClassname = `grid ${
        fileList.length === 1
          ? "grid-cols-1"
          : fileList.length === 2
          ? "grid-cols-2 gap-2"
          : fileList.length === 3
          ? "grid-cols-2 grid-rows-1 gap-2"
          : fileList.length === 4
          ? "grid-cols-2 grid-rows-2 gap-2"
          :""
      }`;

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
          <div className={customClassname}>
            {fileList.map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                className="w-full h-[300px] rounded post-image"
              />
            ))}
          </div>
        )}
     
      </div>
    );
  };
  
  export default UploadImages;
  