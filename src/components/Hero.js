import React from 'react';
import Shoumik from '../assets/img/s2-removebg-preview.png'

const Hero = () => {
    return (
        <section
            id='home'
            className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
        >
            <div className='container mx-auto h-full'>
                <div className='flex items-center h-full pt-8'>
                    <div className='flex-1 flex flex-col items-center lg:items-start'>
                        <p className='text-lg text-accent font-bold text-md mb-[22px] hover:text-purple-600'>
                            Hey, I'm Shoumik! 👋
                        </p>
                        <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
                            I Build & Design <br /> Web Interfaces.
                        </h1>
                        <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
                            I have been enjoying web developing for a few years. My experience shows me the brightest path of my developing career.
                        </p>
                        <button className='btn btn-md bg-accent p-4 hover:bg-purple-600 md:btn-lg transition-all rounded-lg text-white'>
                            <a href="https://drive.google.com/file/d/1c1okW3QC-3Tp3hKaKiXjqrx6lgIrrWv8/view">Download Resume</a>
                        </button>
                    </div>
                    <div className='hidden lg:flex flex-1 justify-end items-end h-full mb-96'>
                        <img className='w-max' src={Shoumik} alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;