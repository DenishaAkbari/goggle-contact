import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adddata , imageuploaded } from '../../Service/Action/ContactAction';
import './Form.css';
import { useNavigate } from 'react-router';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    email: ''
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((e) => ({
      ...e,
      [name]: value
    }));
  };


  const handleimage = (e) => {
    dispatch(imageuploaded(e.target.files[0]));
  }
  const handlecontactsubmit = (event) => {
    event.preventDefault(); 

    console.log(formData);

    formData.id = Math.floor(Math.random() * 1000);

    console.log('updatadataaaaaaaaaaaa',formData);
    dispatch(adddata(formData));


    setFormData({
      firstName: '',
      lastName: '',
      company: '',
      jobTitle: '',
      email: ''
    });





    navigate('/');
  };

  return (
    <div className='view'>
      <form onSubmit={handlecontactsubmit}>
        <button type="submit" className='save'>
          <span>Save</span>
        </button>
        
        <div className="row g-3">
          <div className="col-4">
            <div className="col m-3 d-flex justify-content-center align-items-center">
              <i className="fa-regular fa-user me-3"></i>
              <input type="text" name="firstName" className="form-control" placeholder="First name" aria-label="First name" value={formData.firstName} onChange={handleChange}
              />
            </div>
            <div style={{ marginLeft: '30px' }}>
              <div className="col m-3">
                <input type="text" name="lastName" className="form-control" placeholder="Last name" aria-label="Last name" value={formData.lastName} onChange={handleChange}
                />
              </div>
            </div>
            <div className="col m-3 d-flex justify-content-center align-items-center pt-3">
              <i className="fa-regular fa-building me-3"></i>
              <input type="text" name="company" className="form-control" placeholder="Company" aria-label="Company" value={formData.company} onChange={handleChange}
              />
            </div>
            <div style={{ marginLeft: '30px' }}>
              <div className="col m-3">
                <input type="text" name="jobTitle" className="form-control" placeholder="Job title" aria-label="Job title" value={formData.jobTitle} onChange={handleChange}
                />
              </div>
            </div>
            <div className="col m-3 d-flex justify-content-center align-items-center pt-3">
              <i className="fa-regular fa-envelope me-3"></i>
              <input type="text" name="email" className="form-control" placeholder="Email" aria-label="Email" value={formData.email} onChange={handleChange}
              />
            </div>
            <div className='col-10'>
              <button className='addemail'>
                <i className="fa-solid fa-plus me-3"></i>
                <span>Add Email</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;