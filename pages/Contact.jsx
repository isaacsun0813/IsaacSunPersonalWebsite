import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';

const Contact =()=>{
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ol2t5ku', 'service_ol2t5ku', form.current, 'ZuQw4rWgIhPGHzIA6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return(
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'> 
                Contact Me!
                </p>
                <div className='grid lg:grid-cols-6 gap-8'>

                    <div className='w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 col-span-3 lg:col-span2'>
                        <div className='h-full lg:p-4'>
                            <div>
                                <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://www.icdsoft.com/blog/wp-content/uploads/2021/11/spamtitle-scaled.jpg' alt='/'/>
                            </div>
                            <div>
                                <h2 className='py-2'>Isaac Sun</h2>
                                <p> Aspiring Entrepreneur</p>
                                <p className='py-4'> I am open to roles in SWE/PM/Consulting. Contact me and let's chat!</p>
                            </div>
                        <div>
                            <p className='uppercase pt-8'>Connect With Me</p>
                            <div className='flex items-center justify-between py-4'>
                                <div className='shadow-lg rounded-full shadow-gray-400 p-5 cursor-pointer hover:scale-05 ease-in duration-300'>                
                                    <FaLinkedin/>
                                </div>
                                <div className='shadow-lg rounded-full shadow-gray-400 p-5 cursor-pointer hover:scale-05 ease-in duration-300'>
                                    <FaGithub/>
                                </div>
                                <div className='shadow-lg rounded-full shadow-gray-400 p-5 cursor-pointer hover:scale-05 ease-in duration-300'>
                                    <AiOutlineMail/>
                                </div>
                                <div className='shadow-lg rounded-full shadow-gray-400 p-5 cursor-pointer hover:scale-05 ease-in duration-300'>
                                    <BsFillPersonLinesFill/>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='col-span-3 w-full lg:p-4 h-auto shadow-xl shadow-gray-400 rounded-xl '>
                        <div className='p-4'>
                            <form ref= {form} onSubmit={sendEmail}>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label  className='uppercase text-sm py-2'>
                                            Name
                                        </label>
                                        <input 
                                        name="name"
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type="text"
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>
                                           Phone Number
                                        </label>
                                        <input 
                                        name = "digits"
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type="text"
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'> Email</label>
                                    <input
                                        name="from_email" 
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type="Email"
                                        />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input 
                                        name="subject"
                                        className='border-2 rounded-lg p-3 flex border-gray-300' 
                                        type="text"
                                        />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea name="message" className='border-2 rounded-lg p-3 border-gray-300' rows='10'>
                                    </textarea>
                                </div>
                                <button className='w-full p-4 text-[#5651e5] mt-4' type ='submit'> Send Message </button>
                            </form>
                        </div> 
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 col-span-3 lg:col-span2'>
                            <HiOutlineChevronDoubleUp className= 'text-[#5651e5]' size={30}/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Contact