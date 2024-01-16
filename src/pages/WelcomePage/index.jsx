// import { NavLink } from "react-router-dom"
// import { Nav } from './Header.styled';
// import { useSelector } from "react-redux";
// import { tokenSelector } from "redux/auth/selectors";
// import UserMenu from "components/UserMenu";
// import LoginBtn from "components/LoginBtn";

// const Welcome = () => {

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

// export default Welcome

const { useNavigate } = require('react-router-dom');

const Welcome = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Transforming your body shape with Power Pulse</h1>
      <div>
        <button onClick={() => navigate('/registration')}>Sign Up</button>
        <button onClick={() => navigate('/login')}>Sign In</button>
      </div>
    </div>
  );
}

export default Welcome