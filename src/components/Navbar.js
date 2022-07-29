import React, { useEffect } from 'react'

export default function Navbar() {

  useEffect(() => {
    const primaryNav = document.querySelector('#primary-navigation');
    const navToggle = document.querySelector('#mobile-nav-toggle');
    let visibility = primaryNav.getAttribute('data-visible');

    function openSideMenu() {
      visibility = 'true';
      primaryNav.classList.remove('translate-x-full');
      primaryNav.classList.add('translate-x-0');
    }
    function closeSideMenu() {
      visibility = 'false';
      primaryNav.classList.remove('translate-x-0');
      primaryNav.classList.add('translate-x-full');
    }

    navToggle.addEventListener('click', () => {

      if (visibility === 'false') {
        openSideMenu();
      }
      else {
        closeSideMenu();
      }
      // console.log(visibility);
    })

    const listItemArray = document.querySelectorAll('.list-item');
    for (let i = 0; i < listItemArray.length; i++) {
      listItemArray[i].addEventListener('click', closeSideMenu)
    }

  }, []);

  return (
    <header id='home' className='bg-black text-white font-Poppins md:px-28 lg:px-32 xl:px-40'>
      <button id='mobile-nav-toggle' className='absolute z-50 text-purple-600 text-2xl aspect-square w-10 top-6 right-6 sm:hidden'>
        <i className="fa-solid fa-bars"></i>
      </button>
      <nav>
        <ul id='primary-navigation' className='bg-black fixed flex flex-col sm:flex-row h-full sm:justify-center md:justify-end pl-8 sm:pl-0  pt-32 sm:py-10 -right-1/3 space-y-5 sm:space-y-0 sm:space-x-6 sm:static text-xl sm:text-sm translate-x-full sm:translate-x-0 transition-all duration-500 w-full z-40' data-visible='false'>
          {/* <li className='list-item'>
            <a href="#home">.Home ()</a>
          </li> */}
          <li className='list-item'>
            <a href="#about">.About ()</a>
          </li>
          <li className='list-item'>
            <a href="#experience">.Experience ()</a>
          </li>
          <li className='list-item'>
            <a href="#blogs">.Blogs ()</a>
          </li>
          <li className='list-item'>
            <a href="#contact">.Contact Me ()</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
