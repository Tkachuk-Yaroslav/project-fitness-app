// import { NavLink } from "react-router-dom"
// import { Nav } from './Header.styled';
// import { useSelector } from "react-redux";
// import { tokenSelector } from "redux/auth/selectors";
// import UserMenu from "components/UserMenu";
// import LoginBtn from "components/LoginBtn";

// const WelcomePage = () => {

//   const isToken = useSelector(tokenSelector);

//   return (
//     <Nav>
//       <div>
//         <NavLink to="/">Home</NavLink>
//         {isToken && <NavLink to="phonebook">Phonebook</NavLink>}
//       </div>
//       {isToken ? <UserMenu /> : <LoginBtn />}
//     </Nav>
//   );
// }

// export default WelcomePage

import { Container } from 'components/styles/Container/Container';
import { WelcomeCont } from './styled';
import sprite from '../../images/sprite.svg';

const { useNavigate } = require('react-router-dom');

const WelcomePage = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <WelcomeCont>
        <svg className="line-body">
          <use className='line-sca' href={`${sprite}#icon-line`} />
        </svg>
        <h1>Transforming your body shape with Power Pulse</h1>
        <div className="buttons">
          <button className="signup" onClick={() => navigate('/signup')}>
            Sign Up
          </button>
          <button className="signin" onClick={() => navigate('/signin')}>
            Sign In
          </button>
        </div>
      </WelcomeCont>
    </Container>
  );
}

export default WelcomePage
