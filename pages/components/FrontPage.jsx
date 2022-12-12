import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';

const Main = () =>{
    return(
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600 '>
                        Hey! Welcome to my Website.
                    </p>
                    <h1 className='text-gray-700 py-4'> 
                        My name is<span className='text-[#89CFF0]'> Isaac Sun</span>
                        </h1>
                    <p className='text-gray-700 py-4  m-auto'>
                        I'm studying Computer Science
                        and Tuba Peformance @ Northwestern University. 
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-6'>                                
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
    )
}
export default Main