/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import "../../../src/static/card.css";
interface CardProps {
    name: string;
    description: string;
    image: any;
}

const Card : React.FC<CardProps> = ({name, description, image}) => {
  return (
    <div className='card-container relative'>
        <div className='card-img-container '>
        <img src={image} className='card-image' />
        </div>
        <div className='card-text-container'>
            <div>
                <h2 className='text-black text-2xl'>
                    <b>
                        {name}
                    </b>
                </h2>
            </div>
            <div className='m-1 text-center  card-text'>
            <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    </div>
  )
}

export default Card