import React from 'react';
import betterpractice from '/Users/Isaac/is_portfolio/public/photos/BetterPractice.JPEG';
import Minesweeper from '/Users/Isaac/is_portfolio/public/photos/Minesweeper.png';
import ProjectItem from './projectitems';
const Projects = ()=>{
    return(
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'> Projects</p>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='Northwestern Practice Room Tracker'
                        backgroundImg={betterpractice}
                        projectUrl='https://devpost.com/software/betterpractice'
                        description='Fullstack Web Application'
                        />
                    <ProjectItem
                        title='Minesweeper'
                        backgroundImg={Minesweeper}
                        projectUrl='https://github.com/isaacsun0813/minesweeper'
                        description='Fully developed game in C++'
                        />
                </div>
            </div>
            
        </div>
    )
}
export default Projects