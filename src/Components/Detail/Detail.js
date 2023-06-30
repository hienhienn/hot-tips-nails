import React from 'react'

const Detail = ({data}) => {
  return (
    <div className="quality p-[15px]">
      <img
        src={data.iconUrl}
        width="84"
        height="84"
        className="mga"
      />
      <br />
      <h4 className="title-text text-center">
        {data.title}
      </h4>
      <br />
      <div className="content-text text-center text-[13px]">
        {data.content}
      </div>
    </div>
  )
}

export default Detail