import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-full bg-white rounded-xl px-5 ">
        <div className="relative w-2/6 h-full flex items-center">
            <input className="w-full h-2/4 bg-gray-200 rounded-lg px-2 pl-10 outline-none" type="text" placeholder="Tìm kiếm"/>
            <span className="absolute left-2.5 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </span>
        </div>
        <div className="w-1/4 h-full flex items-center justify-end gap-x-2">
            <span>Saira Goodman</span>
            <img className="w-10 h-10 border-1 border-gray-200 object-cover overflow-hidden rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZMCudOCPZ3DbWkdl14MkFp48hYLbIFnY7A&s" alt="" />
            <Link to={"/notification"} className="flex justify-center items-center rounded-full w-10 h-10 border-1 border-gray-200">
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>             
            </Link>
        </div>
    </div>
  )
}
