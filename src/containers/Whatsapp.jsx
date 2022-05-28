import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SendIcon from '@mui/icons-material/Send';
import '../assets/styles/whatsapp.css';

const style = {
  position: 'fixed',
  bottom: '-110px',
  left: '250px',
  transform: 'translate(-50%, -50%)',
  width: 400,
	height: 300,
  bgcolor: 'black',
  border: '1px solid #000',
	borderRadius: '30px',
	borderStyle: 'none',
  p: 0,
};

const Whatsapp = () => {
	const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

	return (
		<div className="content-whatsapp">
			<Button onClick={handleOpen} className="button-what">
				<img className="button-whatsapp" src="https://img.icons8.com/color/144/000000/whatsapp--v1.png"/>
			</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
					<div className="content-title-whatsapp">
						<p className="title-whatsapp">
							<img className="img-whatsapp" src="https://img.icons8.com/color/144/000000/whatsapp--v1.png"/>
							Whatsapp
						</p>
					</div>
					<div className="content-text-whatsapp">
						<p className="text-whatsapp">
						Hablemos de la educacion de tu hijo.<br />
						Como podemos ayudarte?
						</p>
					</div>
					<div className="content-send">
						<button className="button-send"><SendIcon />Contacto inmediato!</button>
					</div>
        </Box>
      </Modal>
		</div>
	);
};

export default Whatsapp;
