import React from 'react';


import emailjs from 'emailjs-com'

const Contact = () => {

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_swwue6c', 'template_wtjzxcw', e.target, 'wO0G5-6b21zauXBa0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()

    }

    return (
        <section className='grid lg:grid-cols-2 sm:grid-cols-1 mb-10 bg-slate-200' id='contact'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-center text-6xl text-accent font-bold'>Get In Touch</h1>
                <h1 className='text-center text-5xl text-black font-bold mt-10'>Contact Me</h1>
            </div>
            <div class="w-full max-w-lg">
                <form onSubmit={sendEmail} class="bg-white shadow-md rounded-lg p-20 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2 mt-2" for="name">

                        </label>
                        <input class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" name='name' />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">

                        </label>
                        <input class="shadow appearance-none border  rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Your Email" name='email' />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="subject">

                        </label>
                        <input class="shadow appearance-none border  rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="Subject" name='subject' />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">

                        </label>
                        <textarea
                            class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Your message"
                            name='message'
                        ></textarea>
                    </div>
                    <div class="flex items-center justify-between">
                        <button className='btn btn-md bg-accent p-4 hover:bg-purple-600 md:btn-lg transition-all rounded-lg text-white'>
                            Send Message
                        </button>

                    </div>
                </form>

            </div>
        </section>

    );
};

export default Contact;
