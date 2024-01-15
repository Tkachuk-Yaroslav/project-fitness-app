//to remove component here
import sprite from '../../images/sprite.svg';
import { HeaderTag, LogoLink, Svg, UserContainer } from './Header.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import { MobileMenuBtn } from 'components/MobileMenuBtn/MobileMenuBtn';

// const Header = () => {
//   return (
//     <HeaderTag>
//       <Container>
//         <HeaderContainer>
//           <Nav>
//             <List>
//               <li>
//                 <StyledLink to="/">
//                   <Svg>
//                     <use href={`${sprite}#icon-logo`}></use>
//                   </Svg>
//                 </StyledLink>
//               </li>
//               <li>
//                 <StyledLink to="/profile">Profile Settings</StyledLink>
//               </li>
//               <li>
//                 <StyledLink to="/diary">Diary</StyledLink>
//               </li>
//               <li>
//                 <StyledLink to="/products">Products</StyledLink>
//               </li>
//               <li>
//                 <StyledLink to="/exercises">Exercises</StyledLink>
//               </li>
//             </List>
//           </Nav>
//         </HeaderContainer>
//       </Container>
//     </HeaderTag>
//   );
// };

//////////////////

const Header = () => {
  //заглушка під редакс Саши
  const isLoggedIn = true;

  //   const [isOpen, setIsOpen] = useState(false);
  //   const onClickMenuBtn = () => {
  //     setIsOpen({ isOpen: !isOpen });
  //   };
  return (
    <HeaderTag
      style={
        isLoggedIn
          ? { borderBottom: '1px solid rgba(239, 237, 232, 0.20)' }
          : { borderBottom: 'none' }
      }
    >
      <LogoLink to="/">
        <Svg>
          <use href={`${sprite}#icon-logo`}></use>
        </Svg>
      </LogoLink>

      <UserContainer>
        {isLoggedIn && (
          <>
            <UserMenu />
            <MobileMenuBtn />
            <div>MobileMenu</div>
            {/* <MobileMenuButton onClick={onClickMenuBtn} /> */}
            {/* <MobileMenu isOpen={isOpen} /> */}
          </>
        )}
      </UserContainer>
      {/* <StyledLink to="/profile">Profile Settings</StyledLink>
      
      <StyledLink to="/diary">Diary</StyledLink>
      
      <StyledLink to="/products">Products</StyledLink>
      
      <StyledLink to="/exercises">Exercises</StyledLink> */}
    </HeaderTag>
  );
};

export default Header;
