import React from 'react';
import logo from '../assets/img/logo.png'
import '../assets/styles/header.css';

const Header = () => {
	return (
		<header className="header">
			<div className="logo">
				<img className="img-logo" src={logo}></img>
			</div>
			<div className="pages">
				<a href="" className="title">Experiencia uDiscover</a>
				<a href="" className="title">Blog</a>
				<a href="" className="title">Admisiones</a>
				<a href="" className="title">Plataforma uDiscover</a>
				<a href="" className="title-color" >Contactanos</a>
			</div>
		</header>
	);
};

export default Header;
