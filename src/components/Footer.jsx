import React from 'react';
import logo from '../assets/img/fondo.png'
import whatsapp from '../assets/img/-whatsapp-24.png';
import cell from '../assets/img/teléfono.png';
import mail from '../assets/img/correo.png';
import santillana from '../assets/img/santillana.png';
import hug from '../assets/img/hug.png';
import '../assets/styles/footer.css';

const Footer = () => {
	return (
		<div className="content-footer">
			<div className="container-footer">
				<div className="content-img-footer">
					<img src={logo} />
				</div>
				<div className="contact">
					<p className="title-contact">Contactanos</p>
					<div className="content-img-contact">
						<p className="number">
							<img src={whatsapp} className="img-contact" />
							+57 3054246600
						</p>
						<p className="number">
							<img src={cell} className="img-contact" />
							USA +1 786 789 0299
						</p>
						<p className="number">
							<img src={cell} className="img-contact" />
							COL +57 333 033 3477
						</p>
						<p className="number">
							<img src={cell} className="img-contact" />
							CHI +56 323 820 966
						</p>
						<p className="number">
							<img src={cell} className="img-contact" />
							MEX +52 559 063 3939
						</p>
					</div>
					<div className="content-correo">
						<p className="correo">Correo</p>
						<p className="admi" >
							<img src={mail} className="icon-mail" />
							admisiones@ud.school
						</p>
					</div>
				</div>
				<div className="content-follow">
					<p className="title-contact">Siguenos</p>
					<div className="img-follow">
						<img className="icon-follow" src="https://img.icons8.com/fluency/48/000000/facebook-new.png" />
						<img className="icon-follow" src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" />
						<img className="icon-follow" src="https://img.icons8.com/color/48/000000/youtube-play.png" />
						<img className="icon-follow" src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png" />
					</div>
					<p className="edu">
						Registro ante el departamento de educacion de la florida
					</p>
					<p className="politic">Politica de privacidad</p>
				</div>
				<div className="content-aliados">
					<div className="content-title-aliados">
						<p className="title-contact">Aliados</p>
					</div>
					<div className="content-aliados">
						<img className="img-aliados" src={santillana} />
						<img className="img-aliados" src={hug} />
					</div>
				</div>
			</div>
			<div className="content-copy">
				<p className="text-copy">Copyright © 2022 – uDiscover Virtual School – All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
