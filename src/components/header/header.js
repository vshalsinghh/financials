import './header.css';
import Form from '../form/form';
import {HiOutlineMenuAlt4} from 'react-icons/hi';


const Header = ({inputValue, handleChange, handleSubmit, loading, toggleMenu, toggleNav,symbolError}) => (
	<div className='header'>
          <h1 className='icon'>Finance<span>+</span></h1>
            <Form 
              inputValue={inputValue}
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
            loading={loading}
            symbolError={symbolError}/>
            <h2 className={`${!toggleNav && 'hidden-menu'} menu`} onClick={toggleMenu}>
            <HiOutlineMenuAlt4 />
            </h2>
        </div>

	);

export default Header;
