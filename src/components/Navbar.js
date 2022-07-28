import React, { useEffect } from 'react'

export default function Navbar() {

  useEffect(() => {
    const primaryNav = document.querySelector('#primary-navigation');
    const navToggle = document.querySelector('#mobile-nav-toggle');
    let visibility = primaryNav.getAttribute('data-visible');

    navToggle.addEventListener('click', () => {
      
      if (visibility === 'false') {
        visibility='true';
        primaryNav.classList.remove('translate-x-full');
        primaryNav.classList.add('translate-x-0');
      }
      else {
        visibility='false';
        primaryNav.classList.remove('translate-x-0');
        primaryNav.classList.add('translate-x-full');
      }
      // console.log(visibility);
    })

    const home = document.querySelector('#home');
    const about = document.querySelector('#about');
    const experience = document.querySelector('#experience');
    const blog = document.querySelector('#blog');
    const contact = document.querySelector('#contact');

    home.addEventListener('click', () => {
      visibility='false';
      primaryNav.classList.remove('translate-x-0');
      primaryNav.classList.add('translate-x-full');
    })
    about.addEventListener('click', () => {
      visibility='false';
      primaryNav.classList.remove('translate-x-0');
      primaryNav.classList.add('translate-x-full');
    })
    experience.addEventListener('click', () => {
      visibility='false';
      primaryNav.classList.remove('translate-x-0');
      primaryNav.classList.add('translate-x-full');
    })
    blog.addEventListener('click', () => {
      visibility='false';
      primaryNav.classList.remove('translate-x-0');
      primaryNav.classList.add('translate-x-full');
    })
    contact.addEventListener('click', () => {
      visibility='false';
      primaryNav.classList.remove('translate-x-0');
      primaryNav.classList.add('translate-x-full');
    })

  }, []);

  return (
    <header className='bg-black text-white'>
      <button id='mobile-nav-toggle' className='absolute z-50 text-purple-600 text-2xl aspect-square w-10 top-6 right-6 sm:hidden' aria-expanded='false' aria-controls='primary-navigation'>
        <i className="fa-solid fa-bars"></i>
      </button>
      <nav>
        <ul id='primary-navigation' className='primary-navigation flex flex-col fixed -right-1/3 h-full w-full bg-slate-900 pt-32 pl-8 space-y-5 sm:static sm:flex-row sm:space-y-0 sm:space-x-8 sm:pt-0 sm:pl-0 sm:justify-end z-40 text-xl translate-x-full sm:translate-x-0' data-visible='false'>
          <li id='home'>
            <a href="#">.Home ()</a>
          </li>
          <li>
            <a id='about' href="#">.About ()</a>
          </li>
          <li>
            <a id='experience' href="#">.Experience ()</a>
          </li>
          <li>
            <a id='blog' href="#">.Blogs ()</a>
          </li>
          <li>
            <a id='contact' href="#">.Contact Me ()</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
