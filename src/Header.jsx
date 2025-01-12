import React, { useState } from 'react'
import { AiOutlineCaretDown } from "react-icons/ai";
import { MdOutlineSavedSearch } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { PiSignIn } from "react-icons/pi";
import { FaCartPlus } from "react-icons/fa";

import { IoHelpBuoyOutline } from "react-icons/io5";
function Header() {
      const [toggle, setToggle] = useState(false)
      return (
            <>
                  <div className='bg-[#000] bg-opacity-[0.9] w-full h-full fixed duration-500 '
                        onClick={() => {
                              setToggle(false);
                        }}
                        style={{
                              // display: 'node'
                              // visibility: 'hidden',
                              // opacity: toggle ? 1 : 0,
                              visibility: toggle ? 'visible' : 'hidden'
                              // display: toggle ? 'inline' : 'inline'
                        }}>
                        <div className='w-[500px] bg-white h-full absolute duration-[600ms]'

                              style={{
                                    left: toggle ? '0%' : '-100%'
                              }}

                              onClick={(e) => {
                                    e.stopPropagation();
                                    // setToggle(false);

                              }}
                        >

                        </div>


                  </div>
                  <header className='shadow-xl p-[15px]'>
                        <div className='max-w-[1200px] mx-auto flex items-center  '>
                              <div className='w-[100px]   '>
                                    <img src="images/images.png" alt="" className='w-full' />
                              </div>
                              <div className=''>
                                    <span className='font-bold border-b-[3px] border-[black]'>Ratanada</span> Jodhpur, Rajasthan, India
                                    <AiOutlineCaretDown onClick={() => {
                                          setToggle(true);
                                    }} fontSize={25} className='inline  text-[0.9rem] text-[#fc8019] cursor-pointer' />

                              </div>
                              <nav className='flex list-none gap-5  text-[18px] ml-auto font-semibold text-[gray]'>


                                    <li className='flex cursor-pointer items-center gap-2 hover:text-[#fc8019]'>
                                          <MdOutlineSavedSearch className='inline' />

                                          Search</li>
                                    <li className='flex items-center gap-2'>
                                          <MdOutlineSavedSearch className='inline' />

                                          Offers</li><li className='flex items-center gap-2'>
                                          <CiDiscount1 className='inline' />


                                          Help</li><li className='flex items-center gap-2'>
                                          <PiSignIn className='inline' />

                                          Sign In</li><li className='flex items-center gap-2'>
                                          <FaCartPlus className='inline' />

                                          Cart</li>



                              </nav>
                        </div>

                  </header>
            </>
      )
}

export default Header