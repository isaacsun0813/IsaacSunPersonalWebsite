import React from 'react'
const About = () => {
    return(
        <div id='aboutme' className='w-full md:h-screen p-2 flex items-center py-12 '>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl text-[#5651e5] tracking-widest'>About Me</p>
                    <p className='py-2 text-gray-600'>I love to learn. </p>
                    <p className='py-2 text-gray-600'>
                        Whether it's figuring out how to build a neural network
                        or even how to cook a perfectly soft boiled egg, curiosity drives me.
                        My current interests lie in climatech, Web3, and having general intellectual discourse. 
                    </p>
                    <p className='underline cursor-pointer py-2 text-gray-600'> Check out some of my latest projects.</p>
                    <div className='w-full flex p-3 hover:scale-105 duration-300 items-center justify-center h-auto m-auto shadow-lg shadow-gray-400 rounded-lg'>
                        <img className="rounded-lg" src="https://c4.wallpaperflare.com/wallpaper/111/566/569/body-of-water-surrounded-by-green-grass-under-cloudy-sky-during-daytime-caol-sligachan-skye-caol-sligachan-skye-wallpaper-preview.jpg" alt='/'/>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
        
    )
}
export default About