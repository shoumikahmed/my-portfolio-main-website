import React from 'react';

// import img
import Image from '../assets/img/bandorban.jpg';

const About = () => {
    return (
        <section className='section bg-slate-200 p-16' id='about'>
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
                                As a front end web developer, I have built a lot of hands on projects which is attatched in the portfolio section. Programming is my passion, so I love to do code with enthusiastic team. <br />
                                <br />
                                Besides, I enjoy travelling in different places. I love to play cricket & football as outdoor game.
                            </p>
                        </div>
                        <button className='btn btn-md bg-accent p-4 hover:bg-purple-600 md:btn-lg transition-all rounded-lg text-white'>
                            <a href="https://www.linkedin.com/in/shoumikahmed/">Contact Me</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
