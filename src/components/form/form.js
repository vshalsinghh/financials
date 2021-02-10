import React from 'react';
import {FaSearch} from 'react-icons/fa';
import './form.css';


const Form = ({inputValue, handleChange, handleSubmit, loading,symbolError}) => (
		<form className='form' onSubmit={handleSubmit}>
			<input 
			className='form-input' 
			type='text' 
			value={inputValue} 
			onChange={handleChange}
			placeholder={symbolError.length>0 ? 'Try least 2 characters...':'Symbol Name...'}/>
			<button className='submit-button' type='submit' onClick={handleSubmit}>
			{
				loading ? 
				<div className="small-loader"></div> 
				: 
				<h3><FaSearch  /></h3>
			}
			</button>
		</form>

	);

export default Form;