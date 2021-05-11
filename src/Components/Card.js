import React from 'react'


    const Card = ({img, title, price, number}) => {
    return (
        <>
    <div className="CardWrapper">
      <div className="ColImg">
        <img className="Img" src={img} alt={title} />
      </div>
      <div className="ColDetail">
        <div className="Header">
          <div className="BookTitle">{title}</div>
        </div>
        <div className="Description">{price}</div>
        <a className="Link" href={number}>
          Learn more
        </a>
      </div>
    </div>
  ); 
        </>
    )
}

export default Card
