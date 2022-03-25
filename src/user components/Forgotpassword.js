import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

export function Forgotpassword() {
	const history = useHistory();

	return (
		<div className="forgotpassword-wrapper">
			<h3>Admin Dashboard</h3>
			<h5>Reset Password</h5>
			<TextField
				id="outlined-basic"
				label="Enter User Name"
				variant="outlined"
				style={{ width: '40vh' }}
			/>
			<TextField
				id="outlined-basic"
				label="Enter email id"
				variant="outlined"
				style={{ width: '40vh' }}
			/>
			<TextField
				id="outlined-basic"
				label="Enter New Password"
				variant="outlined"
				style={{ width: '40vh' }}
			/>
			<TextField
				id="outlined-basic"
				label="Confirm New Password"
				variant="outlined"
				style={{ width: '40vh' }}
			/>
			<Button variant="outlined" color="success" onClick={() => history.push('/login')}>
				Submit
			</Button>
		</div>
	);
}