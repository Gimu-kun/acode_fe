import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/Logo-text.png'

export default function Sidebar() {
    const SideBarBtn = ({
        to,
        children,
      }: {
        to: string;
        children: React.ReactNode;
      }) => {
        const location = useLocation();
        const isActive = location.pathname === to;
      
        return (
          <Link
            to={to}
            className={`inline-block rounded-xl w-full p-2 transition ${
              isActive ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
            }`}
          >
            {children}
          </Link>
        );
      };
  return (
    <div className='flex flex-col justify-between w-full h-full bg-white rounded-2xl p-5'>
        <div className='w-full'>
            <div className='flex h-20 items-center justify-center p-5'>
                <img className='h-40 my-10 object-cover ' src={logo} alt="" />
            </div>
            <ul className='flex flex-col w-full gap-y-5'>
                <li className='w-full'>
                    <SideBarBtn to='/dashboard'>Thông tin</SideBarBtn>
                </li>
                <li>
                    <SideBarBtn to='/roadmap'>Lộ trình</SideBarBtn>
                </li>
                <li>
                    <SideBarBtn to='/practice'>Kiểm tra thử</SideBarBtn>
                </li>
                <li>
                    <SideBarBtn to='/achievement'>Thành tích</SideBarBtn>
                </li>
            </ul>
        </div>
        <div>
            <SideBarBtn to='/logout'>Đăng xuất</SideBarBtn>
        </div>
    </div>
  )
}
