import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Info from "../pages/Info/Info";
import NotFound from "../pages/not_found/NotFound";
import QuestionMng from "../pages/questions_mng/QuestionMng";

import AuthLayout from "../components/layout/AuthLayout";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

export default function MainRoutes() {
  return (
    <Routes>
        <Route path="" element={<AuthLayout/>}>
          <Route path="login" element={<Login/>}/>
          <Route path="enroll" element={<Signup/>}/>
        </Route>
        <Route path="" element={<MainLayout/>}>
          <Route path="info" element={<Info/>}/>
          <Route path="questions-mng" element={<QuestionMng/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
    </Routes>
  )
}
