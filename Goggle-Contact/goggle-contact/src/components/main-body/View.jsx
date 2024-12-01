import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './View.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, singleAsncy, deleteAsync } from '../../Service/Action/ContactAction';
import { useNavigate } from 'react-router';

function View() {
    const { contacts, contact } = useSelector((state) => state.ConReducer);
    console.log("Contacts:", contacts);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handlecontactEdit = (id) => {
        dispatch(singleAsncy(id))
    }


    const handleDelete = (id) => {
        dispatch(deleteAsync(id))
    }

    useEffect(() => {
        dispatch(addContact());
    }, [dispatch]);


    useEffect(() => {
        if (contact) {
            navigate('/edit');
        }
    }, [contact]);

    return (
        <>
            <div className='view'>
                <div>
                    <span style={{ fontSize: '24px', color: '#444746', marginTop: '20px', display: 'inline-block' }}>Contacts</span>
                </div>
                <Table className='table-borderless table-hover'>
                    <thead style={{borderBottom: '1px solid #ccc'}}>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Job Title & Company</th>
                            <th>Label</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(contacts) && contacts.length > 0 ? (
                            contacts.map((rec, index) => (
                                <tr key={index} className='trhover' style={{ height: '40px', verticalAlign: 'middle' }}>
                                    <td>{rec.firstName}</td>
                                    <td>{rec.email}</td>
                                    <td>{rec.phoneNumber}</td>
                                    <td>{rec.jobTitle}</td>
                                    <td>{rec.label}</td>
                                    <td className=' d-flex align-items-center justify-content-center'>
                                        <div className='tdhover d-flex align-items-center'>
                                        <i class="fa-regular fa-star mx-3"></i>
                                        <button onClick={() => handlecontactEdit(rec.id)} style={{ marginRight: '10px' }} className='btn' ><i class="fa-solid fa-pen mx-3"></i></button>
                                        <NavDropdown title={ <i class="fa-solid fa-ellipsis-vertical "></i>} >
                                            <button onClick={() => handleDelete(rec.id)} className='dropdown-item'><i class="fa-regular fa-trash-can me-3"></i>delete</button>
                                        </NavDropdown>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" style={{ textAlign: "center" }}>No contacts available</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default View;