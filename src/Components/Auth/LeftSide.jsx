import React from 'react';
import { Link } from 'react-router-dom';

const LeftSide = ({bgImage, page, description, span, buttonText, link}) => {
    const divStyle = {
        flex: 1,
        background: `linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)), url("${bgImage}") center`,
        backgroundSize: 'cover',
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        color: 'white',
        justifyContent: 'flex-start',
      };
  return (
    <div style={divStyle}>
      <h1 className="text-6xl leading-tight">{page}</h1>
      <p className="text-lg">{description}</p>
      <span className="text-sm">{span}</span>
      <Link to={link}>
        <button className="w-1/2 py-3 px-4 border-none bg-white text-purple-800 font-bold cursor-pointer">
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default LeftSide;
