import Image from 'next/image'
import { useState } from 'react'
import Images from './images'
import {FaHtml5} from 'react-icons/fa';
import {FaCss3Alt} from 'react-icons/fa';
import {FaJs} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa'

export default function Home() {
  const [selectedImg, setSelectedImg] = useState(Images[0]);
  return (
    <>
    <head>
      <link rel="icon" href='https://images.squarespace-cdn.com/content/5a176be1cf81e02d03c02976/1514448654176-NZMWH4TU1NJ0H89AK0QM/16favi.png?format=100w&content-type=image%2Fpng'/>
      <title>Andreas Yozef</title>
    </head>
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
      </div>      {/* <div className="bar"></div> */}
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
    <div className="app">
      <div className="container">
        <img src={selectedImg} alt="selected" className="selected draw meet"/>
        <div className="imgContainer">
          {Images.map((img, index) => (
            <img
              style={{ border :selectedImg === img? "2px dashed red" : ""}}
              key={index}
              src={img}
              alt='works'
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="footer">
      <span> &copy; Copyright 2021 Andreas Yozef</span>
    </div>
    </>
  )
}
