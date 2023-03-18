import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

function Footer() {
  return (
    <div className='w-full h-16 p-8 flex items-center justify-center'>
        @Akash 2023
        <a className='mx-4' href='https://github.com/Ne0sky'><BsGithub size='1.5em'></BsGithub></a>
        <a className='mx-0' href='https://github.com/Ne0sky'><BsLinkedin size='1.5em'></BsLinkedin></a>
        </div>
  )
}

export default Footer