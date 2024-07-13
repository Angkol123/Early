import React from 'react';

const Card = ({ firstName, lastName, img, role1, role2 }) => {
    return (
        <>
        <div className="flex flex-col items-center w-60% h-75vh rounded-[20px] bg-green-400 px-9 py-9">
            <img src={img} alt={`${firstName} ${lastName}`} className="pentagon" />
            <p className='text-4xl'>{firstName}</p>
            <p className='text-lg mb-5'>{lastName}</p>
            <p className='text-xl'>{role1}</p>
            <p className='text-xl'>{role2}</p>
        </div>
        </>
    );
}

export default Card;
