import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import illu from './../styles/thinkIllustration.gif';
import { useContext } from 'react';
import { authContext } from '../App';
import { useState } from 'react';

export function Login() {
	const history = useHistory();
	const { login, setLogin, setUser, userName, setUserName, setUserId } = useContext(authContext);
	const [passkey, setPasskey] = useState(null);

	// Function to check user name and password
	const checkPassword = () => {
		// this function will get the user data to confirm the input
		const checkUser = (users) => {
			const confirmName = users.filter((e) => e.name === userName && e.password === passkey);
			const confirmedData = [...confirmName][0];
			// If the value is 0 that means user not found
			if (confirmName === 'undefined' || confirmName.length < 1) {
				return alert('Incorrect username or password');
			} else {
				setLogin(!login);
				userName === 'admin' ? setUser(true) : setUser(false);
				setUserId(confirmedData.id);
				history.push('/');
			}
		};

		// First all the user data is brought and then passed into func to check username and password
		fetch('https://61518b634a5f22001701d293.mockapi.io/user/', {
			method: 'GET',
		})
			.then((data) => data.json())
			.then((users) => checkUser(users));
	};
	return (
		<div className="login-wrapper">
			{/* Illustration Container */}
			<div className="row-illustration">
				<img src={illu} alt="Illustration" aria-label="Think image" />
			</div>

			{/* Login Container */}
			<div className="row-login">
				<h1>ADMIN DASHBOARD</h1>
				<div className="login-heading">
					<h2>Login</h2>
				</div>
				<div className="email-container">
					<TextField
						id="outlined-basic"
						variant="outlined"
						className="email-textfield"
						label="Enter User Name"
						onChange={(e) => setUserName(e.target.value)}
					/>
				</div>
				<div className="password-container">
					<TextField
						id="outlined-basic"
						variant="outlined"
						className="password-textfield"
						type="password"
						label="Enter Password"
						onChange={(e) => setPasskey(e.target.value)}
						onKeyPress={(e) => e.key === 'Enter' && checkPassword()}
					/>
				</div>
				<div className="login-btn-container">
					<div className="forgot-password">
						<Link to="/forgot-password" aria-label="forgot password">
							Forgot Password?
						</Link>
					</div>
					<Button variant="outlined" onClick={checkPassword}>
						LOGIN
					</Button>
					<div className="register-yet">
						<Link to="/create-user" aria-label="not registered">
							Haven't Registered Yet?
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}