import React from 'react';
import Image from 'next/image';
import SkillItem from '../components/skillsItems';
const Skills = () =>{
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#565e5]'> 
                Skills
                </p>
                <h2 className='py-4'> Backend</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <SkillItem
                        filename='/static/photos/Python.png'
                        width = '100'
                        language='Python'
                        />
                    <SkillItem
                        filename='/static/photos/C++.png'
                        width = '64'
                        language='C++'
                        />


                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-400'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                src = '/static/photos/JavaR.png' 
                                width='100'
                                height='100'
                                alt='/'
                                />         
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3> Java </h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-400'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                src = '/static/photos/MATLAB.png' 
                                width='100'
                                height='100'
                                alt='/'
                                />         
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3> MATLAB </h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-400'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                src = '/static/photos/SQL.jpeg' 
                                width='100'
                                height='100'
                                alt='/'
                                />         
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3> SQL </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='py-10'> Frontend </h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-400'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                src = '/static/photos/HTML5.png' 
                                width='100'
                                height='100'
                                alt='/'
                                />         
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3> HTML5</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-400'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                src = '/static/photos/CSS.png' 
                                width='64'
                                height='64'
                                alt='/'
                                />         
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3> CSS </h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-400'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                src = '/static/photos/JavaScript.png' 
                                width='100'
                                height='100'
                                alt='/'
                                />         
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3> Javascript </h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-400'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                src = '/static/photos/React.png' 
                                width='81'
                                height='81'
                                alt='/'
                                />         
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3> React  </h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-400'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                src = '/static/photos/Tailwind.png' 
                                width='100'
                                height='100'
                                alt='/'
                                />         
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3> Tailwind  </h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-400'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                src = '/static/photos/Next.png' 
                                width='150'
                                height='150'
                                alt='/'
                                />         
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3> Next.js </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills