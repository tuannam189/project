// import React from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Input } from 'reactstrap';
// import "./Header.scss"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import logo from '../../Assests/svg/logo.svg'

// function index(props) {
//   return (
//     <div className='Header-content' style={{height: '80px', width: '100%'}}>
//       <div className='Header-Head' style={{display: 'flex', alignItems: 'center', height: '56px'}}>
//         <div className='logo'>
//         <img src={logo} alt="React Logo" width='20' height='20'/>
//         </div>
//         <div className='Header-first' style={{cursor: 'pointer'}}>
//             <span href=""> Trang chủ </span>
//         </div>
//         <div className='Button' style={{margin:'0 20px'}}>
//           <span> Tạo </span>
//           <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
//         </div>
//         <div className="search">
//           <div>
//             <Input  placeholder="tìm kiếm" data-test-id="search-box-input" className="searchBoxInput" style={{ background: 'transparent', minWidth: '407px', height: '48px'}}/>
//           </div>  
//         </div>
//         <div className='notifications'>
//           <div>
//           <FontAwesomeIcon icon="fa-solid fa-bell" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default index;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

Header.propTypes = {};

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between" style={{display: 'flex', justifyContent: 'space-between'}}>
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://youtube.com/easyfrontend"
              target="_blank"
              rel="noopener noreferrer"
              style={{textDecoration: 'none'}}
            >
              Youtube
            </a>
          </Col>

          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/photos"
              activeClassName="header__link--active"
              style={{textDecoration: 'none'}}
            >
              Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;