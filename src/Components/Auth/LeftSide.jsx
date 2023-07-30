import React from 'react';

const LeftSide = ({bgImage}) => {
    const divStyle = {
        flex: 1,
        background: `linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)), url("${bgImage}") center`,
        backgroundSize: 'cover',
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        color: 'white',
      };
  return (
    <div style={divStyle}>
      <h1 className="text-6xl leading-tight">Heading Text</h1>
      <p className="text-lg">Paragraph text goes here.</p>
      <span className="text-sm">Small text here.</span>
      <button className="w-1/2 py-3 px-4 border-none bg-white text-purple-800 font-bold cursor-pointer">
        Click Me
      </button>
    </div>
  );
};

export default LeftSide;
