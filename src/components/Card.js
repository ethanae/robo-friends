import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className='tc bg-light-green dib dr3 pa1 ma2 grow br2 shadow-5 code'>
      <img src={`https://robohash.org/${id}?size=200x200`} alt='pic' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;