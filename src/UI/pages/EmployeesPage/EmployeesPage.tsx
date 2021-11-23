import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './EmployeesPage.module.css';
import {AppStateType} from "../../../BLL/store";
import {EmployeeType} from "../../../DALL/Api";
import {getUsersTC} from "../../../BLL/employeesReducer";
import AddEmployee from "../../components/AddEmployee/AddEmployee";
import Employee from "../../components/Employee/Employee";
import {Preloader} from "../../components/common/Preloader/Preloader";


const Employees = () => {

    const dispatch = useDispatch();

    const employees = useSelector<AppStateType, EmployeeType[]>(state => state.employees.users);
    const isFetching = useSelector<AppStateType, boolean>(state => state.employees.isFetching)

    useEffect(() => {
        dispatch(getUsersTC())
    }, [dispatch])

    return (
        <>
            {isFetching ? <Preloader/>
                :
                <div className={styles.container}>
                    <h2>Employees</h2>
                    <div className={styles.usersPanel}>
                        <div className={styles.usersSetBox}>

                            <AddEmployee/>
                        </div>
                    </div>
                    <div className={styles.box}>
                        {employees.map(user => (
                            <Employee key={user.id}
                                      id={user.id}
                                      email={user.email}
                                      avatar={user.avatar}
                                      first_name={user.first_name}
                                      last_name={user.last_name}
                            />
                        ))}
                    </div>
                </div>
            }
        </>
    )

}

export default Employees