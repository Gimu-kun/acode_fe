import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import './auth.css'
import Logo from '../../assets/Logo-text.png'
import { Button, Form } from 'antd'

export default function AuthLayout() {
    const location = useLocation().pathname;
    
    return (
        <div className='flex flex-col relative w-full h-screen'>
            <div className='flex justify-between items-center w-full h-25 z-10 my-5 px-10'>
                <div className='w-35 h-full'>
                    <img className='h-full w-full object-cover' src={Logo} alt="" />
                </div>
                <div className='flex items-center gap-5'>
                    <div className='h-full overflow-hidden'>
                        <span className='not-member text-sm text-gray-400'>Chưa có tài khoản?</span>
                    </div>
                    {
                        location == '/login' ?
                        <Button type='primary' className='signup-btn px-8 py-2 bg-[#E9B7CE] rounded-lg text-white'>
                            <Link to={"enroll"}>Đăng ký</Link>
                        </Button> :
                        <Button type='primary' className='signup-btn px-8 py-2 bg-[#E9B7CE] rounded-lg text-white'>
                            <Link to={"login"}>Đăng nhập</Link>
                        </Button>
                    }
                </div>
            </div>
            <div className='flex'>
                <div className='flex-1'>
                    <svg className='absolute bg-circle' width="1000px" height="1000px" viewBox="0 0 24 24" fill="#2e2c36" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" fill="#D3F3F1" />
                    </svg>
                    <svg className='absolute bg-circle-line' width="1020px" height="1020px" viewBox="0 0 24 24" fill="#2e2c36" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" stroke='#D3F3F1' fill="none" />
                    </svg>
                    <svg className='absolute bg-circle-md z-20' width="150px" height="150px" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" fill="#E9B7CE" />
                    </svg>
                    <svg className='absolute top-20 left-100 bg-circle-sm z-20' width="40px" height="40px" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" fill="#ffffff" />
                    </svg>
                </div>
                <div className='flex justify-center items-center flex-1 h-fit'>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
