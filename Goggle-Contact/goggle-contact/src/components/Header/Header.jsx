import React from 'react'
import './Header.css'
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../Service/Action/loginAction';

function Header() {

  const dispatch = useDispatch();

  const renderTooltip = (message) => (
    <Tooltip id="button-tooltip">{message}</Tooltip>
  );

  const handleLogout = () => {
    dispatch(logoutUser());
  }

  return (
    <div className='header'>
      <div>
        <form action="" className='search' style={{ marginTop: '20px', display: 'flex', alignItems: 'center', width: '50%' }}>
          <i class="fa-solid fa-magnifying-glass" style={{ marginleft: '500px' }}></i>
          <input type="text" placeholder='Search' className='input' />
        </form>
      </div>
      <div className='icons'>
        <i class="fa-regular fa-circle-question" style={{ margin: '0px 20px' }}></i>
        <i class="fa-solid fa-gear" style={{ margin: '0px 20px' }}></i>
        <div style={{ margin: '0px 20px' }}>
          <i class="fa-solid fa-ellipsis-vertical"></i>
          <i class="fa-solid fa-ellipsis-vertical"></i>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <OverlayTrigger placement="bottom" overlay={renderTooltip("Google Account")} delay={{ show: 500, hide: 0 }}>
          <Dropdown style={{ display: 'inline-block' }}>
            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='border-0 fw-medium p-0' style={{ backgroundColor: 'transparent' }}>
              <OverlayTrigger placement="bottom" overlay={renderTooltip("More actions")} delay={{ show: 500, hide: 0 }}>
                <div className="btn border-0 p-0 me-3">
                    <img src={'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'} alt="Profile" className="profile-pic" />
                </div>
              </OverlayTrigger>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ backgroundColor: '#E5EDF6', border: 'none', marginTop: '-3px' }}>
              <Dropdown.ItemText className="dropdown-item-text" style={{ padding: '13px 12px' }}>
                <Link to={'/'} onClick={handleLogout} className='text-decoration-none d-flex align-items-center'><span style={{ color: '#001D35', fontSize: '14px' }} className='fw-medium'>LOGOUT</span></Link>
              </Dropdown.ItemText>
            </Dropdown.Menu>
          </Dropdown>
        </OverlayTrigger>
      </div>
    </div>
  )
}

export default Header