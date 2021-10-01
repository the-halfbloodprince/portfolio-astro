import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faUnsplash} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { MailIcon } from '@heroicons/react/solid'
// import {mail} from '@fortawesome/free-solid-svg-icons'

import './LeftBar.css'

function LeftBar() {
    return (
        <div className="hidden lg:block fixed bottom-0 left-8 xl:left-32 h-4/6 ">
            <div className="flex-col w-6 h-full">
                <div className="leftBarPart"><a href="#"><FontAwesomeIcon icon={faGithub} className="leftBarIcon hover:text-accent transition-all duration-300 transform hover:scale-150" /></a></div>
                <div className="leftBarPart"><a href="#"><FontAwesomeIcon icon={faFacebook} className="leftBarIcon hover:text-accent transition-all duration-300 transform hover:scale-150" /></a></div>
                <div className="leftBarPart"><a href="#"><FontAwesomeIcon icon={faInstagram} className="leftBarIcon hover:text-accent transition-all duration-300 transform hover:scale-150" /></a></div>
                <div className="leftBarPart"><a href="#"><FontAwesomeIcon icon={faUnsplash} className="leftBarIcon hover:text-accent transition-all duration-300 transform hover:scale-150" /></a></div>
                <div className="leftBarPart"><a href="#"><FontAwesomeIcon icon={faLinkedinIn} className="leftBarIcon hover:text-accent transition-all duration-300 transform hover:scale-150" /></a></div>
                <div className="leftBarPart"><a href="#"><MailIcon className="leftBarIcon hover:text-accent transition-all duration-300 transform hover:scale-150" /></a></div>
                <div className="bg-accent flex-1 w-2 h-1/2 block mx-auto"> </div>
            </div>
        </div>
    )
}

export default LeftBar
