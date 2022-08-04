import React from 'react'

export default function Footer() {
    return (
        <div className='bg-black text-white font-Poppins px-8 md:px-28 lg:px-32 xl:px-40 pb-10'>
            <div className='flex justify-start sm:justify-center'>
                <img className='w-24' src="https://drive.google.com/uc?export=view&id=1Xat_nmjb-AEJFby4kJrA_irZenQwMBlM" alt="" />
            </div>
            <p className='text-sm text-center pt-2 pb-6'>&#47;&#47;Made with React <i class="fa-brands fa-react"></i> Magic by Saurabh Das © 2022</p>
            <div className='flex justify-center space-x-8 text-2xl'>
                <a className='hover:text-blue-700' href="https://dribbble.com/crispzeth"><i class="fa-brands fa-dribbble"></i></a>
                <a className='hover:text-blue-700' href="https://github.com/crspz"><i class="fa-brands fa-github"></i></a>
                <a className='hover:text-blue-700' href="https://twitter.com/crispz0x?s=21&t=gM95iab5UFtZXxj91VLcJw"><i class="fa-brands fa-twitter"></i></a>
            </div>
        </div>
    )
}