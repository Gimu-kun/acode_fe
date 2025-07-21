import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Info from "../pages/Info/Info";
import NotFound from "../pages/not_found/NotFound";
import QuestionMng from "../pages/questions_mng/QuestionMng";

export default function MainRoutes() {
  return (
    <Routes>
        <Route path="" element={<MainLayout/>}>
          <Route path="info" element={<Info/>}/>
          <Route path="questions-mng" element={<QuestionMng/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
    </Routes>
  )
}
