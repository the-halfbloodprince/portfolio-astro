import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faUnsplash} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { CodeIcon } from '@heroicons/react/solid'

// function Intro() {
//     return (
//         <div className="h-screen flex ">
//             <div className="h-5/6 w-1/2 flex flex-col justify-center">
//                 <p className="text-3xl">Hi there, I am</p>
//                 <p className="text-6xl text-purple-500 font-bold">Enmu</p>
//                 <p className="text-xl my-10 w-full">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit possimus quod ad natus repudiandae est numquam asperiores nemo accusamus, commodi mollitia adipisci dolor sed provident soluta suscipit, rem earum porro harum ipsa saepe velit distinctio molestias eaque? Soluta, quis laborum!</p>
//                 <div className="flex space-x-2">
//                     <div className="py-2 px-4 text-sm text-white rounded-full bg-purple-500">Full Stack Web Developer</div>
//                     <div className="py-2 px-4 text-sm text-white rounded-full bg-purple-500">UI/UX Designer</div>
//                     <div className="py-2 px-4 text-sm text-white rounded-full bg-purple-500">WebGL Dev</div>
//                 </div>
//             </div>
//                 <div id="profilePic1" className="w-1/2 h-5/6 bg-purple-500">
//                     <img className="object-contain w-full h-full transform -translate-x-6 hover:-translate-x-0 transition-all duration-500 " src="/profilePic.png" alt="" />
//                 </div>
//         </div>
//     )
// }

// export default Intro

function Intro() {
    return (
        <div className="h-screen w-full flex  justify-center space-y-1 px-8 xl:px-0 -my-10">
            <div className="flex flex-col md:w-3/4 justify-center space-y-8 lg:space-y-4">
                <div className="flex w-full">
                    <div className=" w-full">
						<img src="/assets/my_image_purple_blob.png" class="w-32 inline-block absolute right-10  md:hidden z-0" alt="" />
                        <p className="text-3xl lg:text-3xl text-purple-400">Hi there, I am</p>
                        <p className="text-7xl lg:text-8xl text-purple-700 custom-underline">Manish</p>
                        <p className="text-xl md:text-sm mt-8 lg:text-lg xl:text-xl z-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit possimus quod ad natus repudiandae est numquam asperiores nemo accusamus, commodi mollitia adipisci dolor sed provident soluta suscipit, rem earum porro harum ipsa saepe velit distinctio molestias eaque? Soluta, quis laborum!</p>
                    </div>
                </div>
                <div className="space-x-3 mt-12 hidden lg:flex">
                        <div className="py-2 my-1 whitespace-nowrap px-4 text-md lg:text-xs text-white rounded-full bg-purple-500">Full Stack Web Developer</div>
                        <div className="py-2 my-1 whitespace-nowrap px-4 text-md lg:text-xs text-white rounded-full bg-purple-500">UI/UX Designer</div>
                        <div className="py-2 my-1 whitespace-nowrap px-4 text-md lg:text-xs text-white rounded-full bg-purple-500">WebGL Dev</div>
                </div>
                <div className="flex space-x-3 mt-12 lg:hidden">
                        <div className="py-2 my-1 whitespace-nowrap px-4 text-md lg:text-xs text-white rounded-full bg-purple-500"><CodeIcon class="w-7" /></div>
                        <div className="py-2 my-1 whitespace-nowrap px-4 text-md lg:text-xs text-white rounded-full bg-purple-500"><CodeIcon class="w-7" /></div>
                        <div className="py-2 my-1 whitespace-nowrap px-4 text-md lg:text-xs text-white rounded-full bg-purple-500"><CodeIcon class="w-7" /></div>
                </div>
                <div className="flex space-x-5 mt-3 ml-2 lg:hidden">
                    <div><a href="#"><FontAwesomeIcon icon={faGithub} className="text-2xl w-8 transition-all duration-300 transform" /></a></div>
                    <div><a href="#"><FontAwesomeIcon icon={faFacebook} className="text-2xl w-8 transition-all duration-300 transform" /></a></div>
                    <div><a href="#"><FontAwesomeIcon icon={faInstagram} className="text-2xl w-8 transition-all duration-300 transform" /></a></div>
                    <div><a href="#"><FontAwesomeIcon icon={faUnsplash} className="text-2xl w-8 transition-all duration-300 transform" /></a></div>
                    <div><a href="#"><FontAwesomeIcon icon={faLinkedinIn} className="text-2xl w-8 transition-all duration-300 transform" /></a></div>
                </div>
            </div>
			<div class="w-1/2 flex-col justify-center ml-10 hidden md:flex">
				<img src="/assets/my_image_purple_blob.png" alt="" />
			</div>
        </div>
    )
}

export default Intro
