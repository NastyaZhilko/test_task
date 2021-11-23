import React, {FC} from "react";
import {useDispatch} from "react-redux";
import style from "./Employee.module.css"
import profile from "../../assets/images/profile.png"
import {EmployeeType} from "../../../DALL/Api";
import {deleteUser} from "../../../BLL/employeesReducer";

const Employee: FC<EmployeeType> = React.memo(({id, avatar, first_name, last_name}) => {

    const dispatch = useDispatch();

    const removeEmployee = () => {
        dispatch(deleteUser(id))
    }

    return (
        <div className={style.container}>
            <div className={style.block}>
                <img src={!!avatar ? avatar : profile} alt=""/>
                <div> {first_name} {last_name} </div>
            </div>
            <div>
                <button onClick={removeEmployee}>Delete</button>
            </div>
        </div>
    )
})
export default Employee