import React from 'react';
import './navbar.css';


const Navbar = ({toggleNav}) => {
	
	return(
	<div  className={` navbar ${!toggleNav && 'navbarHidden'}   `}>
		
		<div  className='subnav'>
			<span className='subnavbtn'>Home</span>
			<div className='subnav-content'>
				<a href='#'>sub1</a>
				<a href='#'>sub1</a>
				<a href='#'>sub1</a>			
			</div>
		</div>
		<div className='subnav'>
			<span className='subnavbtn'>About</span>
			<div className='subnav-content'>
				<a href='#'>sub2</a>
				<a href='#'>sub3</a>
				<a href='#'>sub4</a>			
			</div>
		</div>
		<div className='subnav'>
			<span className='subnavbtn'>Pages</span>
			<div className='subnav-content'>
				<a href='#'>sub1</a>
				<a href='#'>sub1</a>
				<a href='#'>sub1</a>			
			</div>
		</div>
		<div className='subnav'>
			<span className='subnavbtn'>Contact</span>
			<div className='subnav-content'>
				<a href='#'>sub1</a>
				<a href='#'>sub1</a>
				<a href='#'>sub1</a>			
			</div>
		</div>
		
	</div>
	)};

export default Navbar;