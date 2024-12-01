// import React, { useState } from 'react';
// import { useDispatch , useSelector} from 'react-redux';
// import {  updateAsncy  } from '../../Service/Action/ContactAction';
// import '../Form/Form.css';
// import { useNavigate } from 'react-router';

// function EditData() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     company: '',
//     jobTitle: '',
//     email: ''
//   });
//   const { contacts , contact } = useSelector(state => state.ConReducer);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((e) => ({
//       ...e,
//       [name]: value
//     }));
//   };

//   const handlecontactupdatesubmit = (event) => {
//     event.preventDefault(); 

//     dispatch(updateAsncy(formData));

//     setFormData({
//       firstName: '',
//       lastName: '',
//       company: '',
//       jobTitle: '',
//       email: ''
//     });
//   };

//   useEffect(() => {
//     if (!contact) {
//         navigate('/view');
//     }
// }, [contact, navigate]);



// useEffect(() => {
//     if (contact) {
//         setFormData((prevState) => ({
//             ...prevState,
//             ...contact
//         }));
//     }
// }, [contact]);
//   return (
//     <div className='view'>
//       <form onSubmit={handlecontactupdatesubmit}>
//         <button type="submit" className='save'>
//           <span>Save</span>
//         </button>
//         <div className="row g-3">
//           <div className="col-4">
//             <div className="col m-3 d-flex justify-content-center align-items-center">
//               <i className="fa-regular fa-user me-3"></i>
//               <input type="text" name="firstName" className="form-control" placeholder="First name" aria-label="First name" value={formData.firstName} onChange={handleChange}
//               />
//             </div>
//             <div style={{ marginLeft: '30px' }}>
//               <div className="col m-3">
//                 <input type="text" name="lastName" className="form-control" placeholder="Last name" aria-label="Last name" value={formData.lastName} onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="col m-3 d-flex justify-content-center align-items-center pt-3">
//               <i className="fa-regular fa-building me-3"></i>
//               <input type="text" name="company" className="form-control" placeholder="Company" aria-label="Company" value={formData.company} onChange={handleChange}
//               />
//             </div>
//             <div style={{ marginLeft: '30px' }}>
//               <div className="col m-3">
//                 <input type="text" name="jobTitle" className="form-control" placeholder="Job title" aria-label="Job title" value={formData.jobTitle} onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div className="col m-3 d-flex justify-content-center align-items-center pt-3">
//               <i className="fa-regular fa-envelope me-3"></i>
//               <input type="text" name="email" className="form-control" placeholder="Email" aria-label="Email" value={formData.email} onChange={handleChange}
//               />
//             </div>
//             <div className='col-10'>
//               <button className='addemail'>
//                 <i className="fa-solid fa-plus me-3"></i>
//                 <span>Add Email</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default EditData;









import React, { useEffect, useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import {  updateAsncy  } from '../../Service/Action/ContactAction';
import '../Form/Form.css';
import { useNavigate } from 'react-router';

function EditData() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    email: ''
  });
  const { contact } = useSelector(state => state.ConReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handlecontactupdatesubmit = (event) => {
    event.preventDefault(); 

    dispatch(updateAsncy(formData));

    setFormData({
      firstName: '',
      lastName: '',
      company: '',
      jobTitle: '',
      email: ''
    });
  };

useEffect(() => {
  if (!contact) {
    navigate('/')
  }
}, [contact])

useEffect(() => {
  if (contact) {
    setFormData(contact)
  }
}, [contact])



// useEffect(() => {
//     if (contact) {
//         setFormData((prevState) => ({
//             ...prevState,
//             ...contact
//         }));
//     }
// }, [contact]);
  return (
    <div className='view'>
      <form onSubmit={handlecontactupdatesubmit}>
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

export default EditData;