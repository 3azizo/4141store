import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser, FaBars } from 'react-icons/fa'; // Added FaBars for toggle
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import SearchBox from './SearchBox'; // Assuming SearchBox handles its own RTL styling
import logo from '../assets/logo.png';
import { resetCart } from '../slices/cartSlice';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(resetCart());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header>
      <Navbar expand='lg' className='header-bg-dark' collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src={logo} alt='Formal Suits' className='logo' />
          </Navbar.Brand>

          {/* Toggle button, ensure it's on the left for RTL consistency */}
          <Navbar.Toggle aria-controls='basic-navbar-nav'>
             {/* You can add a custom icon if FaBars doesn't fit your aesthetic */}
             <FaBars style={{ color: '#2680daff' }} /> 
          </Navbar.Toggle>

          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'> 
              {/* Search Box before other links for prominence, adjust order as needed */}
              <SearchBox />

              {/* Navigation items in logical order for Arabic users */}
              <NavDropdown title='الاقسام' id='category' alignRight> {/* alignRight for RTL dropdown */}
        
                <NavDropdown.Item as={Link} to='/categories/رجالى'>
                  رجالى
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/categories/نسائى'>
                  نسائى
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/categories/اطفال'>
                  اطفال
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/categories/ادوات رياضية'>
                  ادوات رياضية
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/categories/احذية'>
                  احذية
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to='/cart'>
                المشتريات <FaShoppingCart /> {/* Icon after text for RTL */}
                {cartItems.length > 0 && (
                  <Badge pill bg='success' style={{ marginRight: '5px' }}> {/* Adjusted margin for RTL */}
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </Badge>
                )}
              </Nav.Link>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username' alignRight>
                  <NavDropdown.Item as={Link} to='/profile'>
                    الملف الشخصى
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    تسجيل الخروج
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link as={Link} to='/login'>
                  تسجيل الدخول <FaUser /> {/* Icon after text for RTL */}
                </Nav.Link>
              )}

              {/* Admin Links */}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu' alignRight>
                  <NavDropdown.Item as={Link} to='/admin/productlist'>
                    منتجات
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/orderlist'>
                    طلبات
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/userlist'>
                    المستخدمين
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;