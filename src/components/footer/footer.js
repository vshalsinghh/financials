import React from 'react';

import './footer.css';
import {FaHeart} from 'react-icons/fa';


const Footer = () => (
	<div className='footer'>
		<h3>Built with React and <FaHeart className='heart' color='white'/></h3>
		<p>Send Email: <a href='mailto:vishalsingh2402@gmail.com'>vishalsingh2402@gmail.com</a></p>
	</div>

	)
export default Footer;