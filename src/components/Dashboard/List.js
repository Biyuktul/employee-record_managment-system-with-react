import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../darkmode.css';
function List({ employees, handleEdit, handleDelete }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'ETB',
        minimumFractionDigits: null
    });

    const navigate = useNavigate();
    const loginpage = () => {
        // 👇️ navigate to /contacts
        navigate('/login');
      };

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
    if (theme === 'light') {
    setTheme('dark');
     } else {
       setTheme('light');
     }
  };
useEffect(() => {
        document.body.className = theme;
      }, [theme]);


    return (
        <div className='App ${theme}'>
            <button onClick={toggleTheme} className='round-button' style={{float: 'right', backgroundColor: 'black', color: 'white'}}>Toggle Theme</button>
            <button onClick={loginpage} className='round-button' style={{float: 'right', marginRight: 20, backgroundColor: 'red', color:'white'}}>Logout</button>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{formatter.format(employee.salary)}</td>
                                <td>{employee.date} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List
