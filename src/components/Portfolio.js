import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
    return (
        <section id='portfolio' className=' section pt-12 bg-slate-200 min-h-[1400px]'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='text-2xl font-bold text-accent section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
                        My latest work
                    </h2>
                    <p className='subtitle p-8'>
                        Recently I have worked on several projects like reactjs, tailwindcss, bootstrap, vanilla javascript etc.
                    </p>
                </div>
                <Projects />
            </div>
        </section>
    );
};

export default Portfolio;
