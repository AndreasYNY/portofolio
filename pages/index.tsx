import Image from 'next/image'
import { useState } from 'react'
import ImageGallery from 'react-image-gallery';
import {FaHtml5} from 'react-icons/fa';
import {FaCss3Alt} from 'react-icons/fa';
import {FaJs} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa'

export default function Home() {
  const images = [
    {
      original: 'https://raw.githubusercontent.com/AndreasYNY/me-portofolio/main/prot/img/Screenshot_4.png',
      thumbnail: 'https://raw.githubusercontent.com/AndreasYNY/me-portofolio/main/prot/img/Screenshot_4.png',
      description: 'old simple website',
    },
    {
      original: 'https://raw.githubusercontent.com/AndreasYNY/me-portofolio/main/prot/img/68747470733a2f2f692e696d6775722e636f6d2f346d7568614d692e706e67.png',
      thumbnail: 'https://raw.githubusercontent.com/AndreasYNY/me-portofolio/main/prot/img/68747470733a2f2f692e696d6775722e636f6d2f346d7568614d692e706e67.png',
      description: 'old website using bootstrap',
    },
    {
      original: 'https://i.ibb.co/F879XVq/image.png',
      thumbnail: 'https://i.ibb.co/F879XVq/image.png',
      description: 'old ImGUI stuff using osiris CSGO base',
    },
    {
      original: 'https://raw.githubusercontent.com/AndreasYNY/me-portofolio/main/prot/img/screenshot024.jpg',
      thumbnail: 'https://raw.githubusercontent.com/AndreasYNY/me-portofolio/main/prot/img/screenshot024.jpg',
      description: 'ImGUI stuff using osu!Mirai base'
    },
    {
      original: 'https://raw.githubusercontent.com/AndreasYNY/me-portofolio/main/prot/img/unknown.png',
      thumbnail: 'https://raw.githubusercontent.com/AndreasYNY/me-portofolio/main/prot/img/unknown.png',
      description: 'vanilla portofolio website!'
    },
  ];
  return (
    <>
    <head>
      <link rel="icon" href='https://images.squarespace-cdn.com/content/5a176be1cf81e02d03c02976/1514448654176-NZMWH4TU1NJ0H89AK0QM/16favi.png?format=100w&content-type=image%2Fpng'/>
      <title>Andreas Yozef</title>
    </head>
    <div className="welcome"><span>Andreas Yozef</span></div>
    <div>
      <a className="gits" href="https://github.com/andreasyny/"><FaGithub/></a></div>
    <div className="Intro">
      <div className="imgz">
      <Image
        src="https://raw.githubusercontent.com/AndreasYNY/me-portofolio/main/prot/img/image-removebg-preview.png"
        alt="owo"
        height={200}
        width={200}
        quality={100}
      />
      </div>
      <h1>Andreas Yozef</h1>
      <p>Hi! my name is Andreas</p>
      <p>I'm a 2nd year at SMK Bakti Ihdata High School</p>
      <p>I'm still learning! here is some languages that i can use:</p>
      <div className="logos">
        <ul>
          <li><FaHtml5/></li>
          <li><FaCss3Alt/></li>
          <li><FaJs/></li>
          <li><FaReact/></li>
        </ul>
        <span className="sp">*i also learning ImGUI there is no logo for that!</span>
      </div>
    </div>
    <div className="abtme">
      <h1>My Works!</h1>
    </div>
    <ImageGallery autoPlay="true" items={images} />

    <div className="footer">
      <span> &copy; Copyright 2021 Andreas Yozef</span>
    </div>
    </>
  )
}
