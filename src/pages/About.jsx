import React from 'react'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500 '>
          <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px] ' src={assets.about_image} alt=""/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>Welcome to MyDocTime, your trusted online doctor appointment booking system. We are committed to making healthcare more accessible and convenient by connecting patients with doctors seamlessly. Our platform allows users to find experienced healthcare professionals, check their availability, and book appointments effortlessly.</p>
            <p>At MyDocTime, we prioritize user-friendly experiences with an intuitive interface, ensuring that scheduling medical consultations is quick and stress-free. Our system is designed to reduce wait times, eliminate unnecessary paperwork, and provide a reliable way for patients to manage their healthcare needs efficiently.</p>
            <b className='text-gray-800'>Our Vision</b>
            <p>Our vision is to make healthcare easily accessible for everyone by providing a simple, fast, and reliable doctor appointment booking system. We aim to bridge the gap between patients and healthcare professionals, ensuring hassle-free scheduling and improved medical care through technology.</p>
          </div>
        </div>
        <div className='text-xl my-4'>
          <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
        </div>
        <div className='flex flex-col md:flex-row mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#063970] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Quick & Easy Booking:</b>
            <p>Book doctor appointments in just a few clicks with our simple and fast system, saving you time and effort.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#063970] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Trusted Doctors:</b>
            <p>Find experienced and verified doctors across various specialties for quality healthcare.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#063970] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Secure & Convenient:</b>
            <p>Easily manage appointments with reminders and rescheduling options while keeping your information safe.</p>
          </div>
        </div>
    </div>
  )
}

export default About