import { Outlet } from "react-router-dom";
import Navbar from "../ui/navbar/Navbar";
import Sidebar from "../ui/sidebar/Sidebar";

export default function MainLayout() {
  return (
    <div className="flex gap-10 relative w-full min-h-screen bg-[linear-gradient(20deg,_#E9B7CE,_#ffffff,_#D3F3F1,_#ffffff)] p-5">
        <div className="w-1/6">
            <Sidebar/>
        </div>
        <div className="flex flex-col gap-5 w-5/6">
            <div className="h-15">
                <Navbar/>
            </div>
            <Outlet/>
        </div>
    </div>
  )
}
