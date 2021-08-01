import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faUnsplash} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { MailIcon } from '@heroicons/react/solid'
// import {mail} from '@fortawesome/free-solid-svg-icons'

function LeftBar() {
    return (
        <div className="hidden lg:block fixed bottom-0 left-8 xl:left-32 h-4/6 ">
            <div className="flex-col w-6 space-y-6 h-full">
                <div><a href="#"><FontAwesomeIcon icon={faGithub} className="text-2xl hover:text-purple-600 transition-all duration-300 transform hover:scale-150" /></a></div>
                <div><a href="#"><FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-purple-600 transition-all duration-300 transform hover:scale-150" /></a></div>
                <div><a href="#"><FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-purple-600 transition-all duration-300 transform hover:scale-150" /></a></div>
                <div><a href="#"><FontAwesomeIcon icon={faUnsplash} className="text-2xl hover:text-purple-600 transition-all duration-300 transform hover:scale-150" /></a></div>
                <div><a href="#"><FontAwesomeIcon icon={faLinkedinIn} className="text-2xl hover:text-purple-600 transition-all duration-300 transform hover:scale-150" /></a></div>
                <div><a href="#"><MailIcon className="text-2xl hover:text-purple-600 transition-all duration-300 transform hover:scale-150" /></a></div>
                <div className="bg-purple-600 flex-1 w-2 h-1/2 block mx-auto"> </div>
            </div>
        </div>
    )
}

export default LeftBar
