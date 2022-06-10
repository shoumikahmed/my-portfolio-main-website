import React from 'react';

const Project = ({ item }) => {
    return (
        <div key={item.id} className='flex flex-col items-center text-center '>
            <div className='mb-8'>
                <img className='rounded-2xl' src={item.image} alt='' />
            </div>
            <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
            <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
            <button className='btn btn-md bg-accent p-2 hover:bg-purple-600 md:btn-lg transition-all rounded-lg text-white'>
                <a href={item.livelink}>Live site</a>
            </button>
        </div>
    );
};

export default Project;
