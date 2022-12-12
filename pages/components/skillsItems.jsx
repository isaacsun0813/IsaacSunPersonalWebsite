import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SkillItem = ({filename,width,language})=>{
    return(
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-400'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image 
                                src = {filename}
                                width= {width}
                                height= {width}
                                alt='/'
                                />         
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3> {language}</h3>
                            </div>
                        </div>
                    </div>
    )
}
export default SkillItem