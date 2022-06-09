import React from 'react';

// import img
import Image from '../assets/img/bandorban.jpg';

const About = () => {
    return (
        <section className='section bg-slate-200 p-12' id='about'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <img
                        className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
                        src={Image}
                        alt=''
                    />
                    <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                        <div className='flex flex-col'>
                            <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                                Shoumik Ahmed
                            </h2>
                            <p className='mb-4 text-accent hover:text-purple-600'>
                                Frontend Web Developer
                            </p>
                            <hr className='mb-8 opacity-100' />
                            <p className='mb-8'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
                                earum dolorum quo consequatur rem nihil hic ducimus rerum soluta
                                neque harum velit molestiae dignissimos distinctio dolorum nisi
                                labore culpa nihil. <br />
                                <br />
                                Qui doloremque quod sit accusantium unde totam inventore
                                cupiditate ratione esse maxime eum recusandae ducimus.
                            </p>
                        </div>
                        <button className='btn btn-md bg-accent p-4 hover:bg-purple-600 md:btn-lg transition-all rounded-lg text-white'>
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
