import React from 'react'
// https://drive.google.com/uc?export=view&id=1zDMJ167lJj_IzwHVK37I_kuMng0oh9Qw
export default function Blogs() {
    return (
        <main id='blogs'>
            <section className='font-Poppins px-8 md:px-28 lg:px-32 xl:px-40 pb-20'>
                <div className='relative'>
                    <img className='absolute -right-8 sm:right-0' src="https://drive.google.com/uc?export=view&id=1zDMJ167lJj_IzwHVK37I_kuMng0oh9Qw" alt="" />
                </div>
                <h1 className='font-bold text-3xl pt-20 pb-10'>&lt;/Blogs&gt;</h1>
                <div className='pb-5 '>
                    <h2 className='font-bold text-2xl text-gray-600'><i class="fa-brands fa-github-alt"></i>&ensp;What is ENS? All about ENS system</h2>
                    <div className='border-l-2 border-gray-300 pl-6'>
                        <p className='font-bold text-md text-gray-500 py-3'>June 1st, 2022</p>
                        <p>Ethereum Name System is similar to DNS, which offers a more secure, open and expandable naming system that interacts with the Ethereum Blockchain. It isn’t designed to replace DNS, moreover to work alongside it. The initial development of ENS was done by Ethereum Foundation led by Nick Johnson and Alex Van de Sande.</p>
                        <a className='underline font-bold text-sm cursor-pointer text-gray-500 hover:text-black' href="https://mirror.xyz/0x0D524f18e7edb570d001Afff3fC5708b55066F72/J2VLzIx1XvRAOcj8EKWsiRv9a8Kqjlkbysc432t6nw8" target='_blank' rel='noreferrer'>Read more</a>
                    </div>
                </div>
                <div className='pb-5'>
                    <h2 className='font-bold text-2xl text-gray-600'><i class="fa-brands fa-github-alt"></i>&ensp;what really web3.0 is and how it’ll change the internet?</h2>
                    <div className='border-l-2 border-gray-300 pl-6'>
                        <p className='font-bold text-md text-gray-500 py-3'>May 22nd, 2022</p>
                        <p>Decentralize content regulation which means you are the creator. In web2.0 it’s like being with the creator wherever or whenever but in web3.0 you are the creator web3 is more like ownership. You own your own content. Basically, web3 is the integration of machine learning AI and blockchain. It will allow owning your own data which means whatever content you are posting as a tweet or something you own that piece.</p>
                        <a className='underline font-bold text-sm cursor-pointer text-gray-500 hover:text-black' href="https://mirror.xyz/0x0D524f18e7edb570d001Afff3fC5708b55066F72/0nNU49iToHNEJ2iSswK56b-ZBm-ND5bQkF0Pk8MXOzg" target='_blank' rel='noreferrer'>Read more</a>
                    </div>
                </div>
                <div className='pb-5'>
                    <h2 className='font-bold text-2xl text-gray-600'><i class="fa-brands fa-github-alt"></i>&ensp;GameFi and P2E</h2>
                    <div className='border-l-2 border-gray-300 pl-6'>
                        <p className='font-bold text-md text-gray-500 py-3'>May 17th, 2022</p>
                        <p>GameFi basically means “game” and “finance”. More to that, GameFi nowadays is an intersection of gaming, DeFi, and NFT (non-fungible token). The current identifying feature of GameFi is largely tied to play-to-earn (P2E) games. This is because the incentives have become quite attractive to users, thus giving rise to large P2E communities.</p>
                        <a className='underline font-bold text-sm cursor-pointer text-gray-500 hover:text-black' href="https://mirror.xyz/0x0D524f18e7edb570d001Afff3fC5708b55066F72/lW0s_aI5KRNU4BCwFuUtbFCIjIvW7Yxi59d-bIia0W4" target='_blank' rel='noreferrer'>Read more</a>
                    </div>
                </div>
            </section>
        </main>
    )
}
