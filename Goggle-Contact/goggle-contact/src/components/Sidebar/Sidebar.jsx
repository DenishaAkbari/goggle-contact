// import React from 'react'
// import logo from '../../assets/logo.png'
// import './Sidebar.css'
// import { useNavigate} from 'react-router-dom';

// function Sidebar() {
  
//   const navigate = useNavigate()

//   const handlesubmit = () => {
//     console.log('clicked')
//     navigate('/contatcform')
//   }






//   return (
//     <div className='main-sidebar'>
//       <div className='sidebar'>
//        <div className='side-header' style={{ display: 'flex' , alignItems: 'center'  }}>
//        <div style={{ padding: '12px' , fontSize: '24px' , marginLeft: '15px' }}>
//           <i class="fa-solid fa-bars"></i>
//         </div>
//           <div>
//             <img src={logo} alt="logo" style={{ width : '40px', marginRight: '12px' , marginLeft: '12px'}} />
//           </div>
//           <span style={{ fontSize: '22px' ,color: '#5f6368'}}>Contacts</span>
//        </div>
//        <div className='button'>
//          <button style={{ marginLeft: '10px' }} onClick={handlesubmit}><i class="fa-solid fa-plus me-3"></i>Create Contact</button>
//        </div>
//        <div style={{marginTop: '20px'}}>
//           <ul style={{listStyle: 'none' , padding : '0px'}}>
//             <li className='active' style={{ display: 'flex', alignItems: 'center' , padding: '20px'}}>
//               <i class="fa-solid fa-user"></i>
//               <span style={{marginLeft: '30px' , display: 'block'}}>Contacts</span>
//               <span style={{marginLeft: '90px' , display: 'block'}}>95</span>
//             </li>
//             <li className='non-active' style={{ display: 'flex', alignItems: 'center' , padding: '15px' , marginLeft: '20px' }}>
//             <i class="fa-regular fa-clock"></i>
//               <span style={{marginLeft: '30px' , display: 'block'}}>Frequent</span>
//             </li>
//             <li className='non-active' style={{ display: 'flex', alignItems: 'center' , padding: '15px' , marginLeft: '20px' }}>
//             <i class="fa-solid fa-file-arrow-down"></i>
//               <span style={{marginLeft: '30px' , display: 'block'}}> Other Contacts</span>
//               <i class="fa-solid fa-circle-exclamation" style={{marginLeft: '55px' , display: 'block'}}></i>
//             </li>
//             <li className='non-active'  style={{ display: 'flex', alignItems: 'center' , padding: '15px' , marginLeft: '20px' }}> Fix & manage</li>
//             <li className='non-active' style={{ display: 'flex', alignItems: 'center' , padding: '15px' , marginLeft: '20px' }}>
//             <i class="fa-solid fa-screwdriver-wrench"></i>
//               <span style={{marginLeft: '30px' , display: 'block'}}>Merge & fix </span>
//             </li>
//             <li className='non-active' style={{ display: 'flex', alignItems: 'center' , padding: '15px' , marginLeft: '20px' }}>
//             <i class="fa-solid fa-upload"></i>
//               <span style={{marginLeft: '30px' , display: 'block'}}>Import</span>
//             </li>
//             <li className='non-active' style={{ display: 'flex', alignItems: 'center' , padding: '15px' , marginLeft: '20px' }}>
//             <i class="fa-regular fa-trash-can"></i>
//               <span style={{marginLeft: '30px' , display: 'block'}}>Trush</span>
//             </li>
//             <li className='non-active' style={{ display: 'flex', alignItems: 'center' , padding: '15px' , marginLeft: '20px' }}>
//               <span style={{marginLeft: '0px' , display: 'block'}}>Labels</span>
//               <i class="fa-solid fa-plus" style={{marginLeft: '150px' , display: 'block'}}></i>
//             </li>
//           </ul>
//        </div>
//       </div>
//     </div>
//   )
// }

// export default Sidebar











import React from 'react';
import logo from '../../assets/logo.png';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  const handlesubmit = () => {
    console.log('clicked');
    navigate('/contactform'); // Correct path
  };

  return (
    <div className='main-sidebar'>
      <div className='sidebar'>
        <div className='side-header' style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ padding: '12px', fontSize: '24px', marginLeft: '15px' }}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div>
            <img src={logo} alt="logo" style={{ width: '40px', marginRight: '12px', marginLeft: '12px' }} />
          </div>
          <span style={{ fontSize: '22px', color: '#5f6368' }}>Contacts</span>
        </div>
        <div className='button'>
          <button style={{ marginLeft: '10px' }} onClick={handlesubmit}>
            <i className="fa-solid fa-plus me-3"></i>Create Contact
          </button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <ul style={{ listStyle: 'none', padding: '0px' }}>
            <li className='active' style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
              <i className="fa-solid fa-user"></i>
              <span style={{ marginLeft: '30px', display: 'block' }}>Contacts</span>
              <span style={{ marginLeft: '90px', display: 'block' }}>95</span>
            </li>
            <li className='non-active' style={{ display: 'flex', alignItems: 'center', padding: '15px', marginLeft: '20px' }}>
              <i className="fa-regular fa-clock"></i>
              <span style={{ marginLeft: '30px', display: 'block' }}>Frequent</span>
            </li>
            <li className='non-active' style={{ display: 'flex', alignItems: 'center', padding: '15px', marginLeft: '20px' }}>
              <i className="fa-solid fa-file-arrow-down"></i>
              <span style={{ marginLeft: '30px', display: 'block' }}>Other Contacts</span>
              <i className="fa-solid fa-circle-exclamation" style={{ marginLeft: '55px', display: 'block' }}></i>
            </li>
            <li className='non-active' style={{ display: 'flex', alignItems: 'center', padding: '15px', marginLeft: '20px' }}>Fix & manage</li>
            <li className='non-active' style={{ display: 'flex', alignItems: 'center', padding: '15px', marginLeft: '20px' }}>
              <i className="fa-solid fa-screwdriver-wrench"></i>
              <span style={{ marginLeft: '30px', display: 'block' }}>Merge & fix</span>
            </li>
            <li className='non-active' style={{ display: 'flex', alignItems: 'center', padding: '15px', marginLeft: '20px' }}>
              <i className="fa-solid fa-upload"></i>
              <span style={{ marginLeft: '30px', display: 'block' }}>Import</span>
            </li>
            <li className='non-active' style={{ display: 'flex', alignItems: 'center', padding: '15px', marginLeft: '20px' }}>
              <i className="fa-regular fa-trash-can"></i>
              <span style={{ marginLeft: '30px', display: 'block' }}>Trash</span>
            </li>
            <li className='non-active' style={{ display: 'flex', alignItems: 'center', padding: '15px', marginLeft: '20px' }}>
              <span style={{ marginLeft: '0px', display: 'block' }}>Labels</span>
              <i className="fa-solid fa-plus" style={{ marginLeft: '150px', display: 'block' }}></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
