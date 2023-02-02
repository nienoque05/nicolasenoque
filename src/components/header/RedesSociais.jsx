import React from 'react'
import {IoLogoLinkedin, IoLogoGithub} from "react-icons/io"
import "./header.css"

const RedesSociais = () => {
  return (
    <div className='header__sociais'>
        <a href='https://www.linkedin.com/in/nicolas-ara%C3%BAjo-26a78317a/' target="_blank"><IoLogoLinkedin/></a>
        <a href='https://github.com/nienoque05' target="_blank"><IoLogoGithub/></a>
    </div>
  )
}

export default RedesSociais