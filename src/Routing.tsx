import React from "react";
import {Route, Routes} from 'react-router-dom';
import Main from "./UI/pages/MainPage/MainPage";
import Employees from "./UI/pages/EmployeesPage/EmployeesPage";
import Error404 from "./UI/pages/NotFoundPage/NotFoundPage";

export const PATH = {
    MAIN: "/",
    EMPLOYEES: "/employees"
}

const Routing: React.FC =()=>{
    return (
        <div>
            <Routes>
                <Route path={PATH.MAIN}  element={<Main/>}/>
                <Route path={PATH.EMPLOYEES}   element={<Employees/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </div>
    )
}
export default Routing