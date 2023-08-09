import React from 'react'
import './style.css'
const ImagesLayout = ({fileList}) => {

    const customClassname = `grid ${
        fileList.length === 1
          ? "grid-cols-1"
          : fileList.length === 2
          ? "grid-cols-2 gap-1"
          : fileList.length === 3
          ? "grid-cols-2 grid-rows-1 gap-1"
          : fileList.length === 4
          ? "grid-cols-2 grid-rows-2 gap-1"
          :""
      }`;

      const customImgClassname = `${
        fileList.length === 3
        ? " post-image3"
        : fileList.length === 4
        ? " post-image4"
        : fileList.length === 5
        ? " post-image5"
        :""
      }`

  return (
    <div className={customClassname}>
            {fileList.map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                className={`w-full h-[250px] rounded ${customImgClassname}`}
            />
        ))}
    </div>
  )
}

export default ImagesLayout