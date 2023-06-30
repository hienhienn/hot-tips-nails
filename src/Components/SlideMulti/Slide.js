import React from "react";

const Slide = ({data}) => {
  return (
    <div className="item">
      <img
        src={data.imgUrl}
        alt={data.title}
      />
      <div className="title-text info">{data.title}</div>
    </div>
  );
};

export default Slide;
