import { TextField } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import { Avatar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { authContext } from '../App';

export function Header() {
	const { login, setLogin, menu, setMenu, userName, user, userId } = useContext(authContext);
	// console.log(userId);
	const [showsearch, setShowsearch] = useState(false);
	const history = useHistory();
	return (
		<header className="content-header">
			<div className="content-header-div">
				{/* Hamburger Menu */}

				<Button className="hamburger-menu" onClick={() => setMenu(!menu)}>
					<MenuIcon />
				</Button>

				{/* Search Bar /> */}

				<div className="search-bar">
					<TextField
						id="outlined-basic"
						placeholder="Search here..."
						variant="outlined"
						className="text-field"
					/>
					<Button className="search-button">
						<FaSearch className="search-icon" color="primary" />
					</Button>
				</div>

				<Button className="search-button-small" onClick={() => setShowsearch(!showsearch)}>
					<FaSearch className="search-icon" color="primary" />
				</Button>

				{/* Icon and user profile holder */}
				<div className="icon-holder">
					{/* User name and profie pic */}
					<div className="user-badge">
						<span
							className="profile-name"
							style={{ cursor: 'pointer' }}
							onClick={() => (user ? history.push('/users') : history.push(`/profile/${userId}`))}
						>
							Welcome, {userName}!
						</span>
						<Avatar src="/broken-image.jpg" style={{ cursor: 'pointer', marginRight: '10px' }} />
						<span
							className="profile-logout"
							style={{ cursor: 'pointer' }}
							onClick={() => setLogin(!login) & history.push('/login')}
						>
							Logout
						</span>
					</div>
				</div>
			</div>

			<div className="search-bar-big" style={{ display: showsearch ? 'flex' : 'none' }}>
				<TextField
					id="outlined-basic"
					placeholder="Search here..."
					variant="outlined"
					className="text-field"
				/>
				<Button className="search-button">
					<FaSearch className="search-icon" color="primary" />
				</Button>
			</div>
		</header>
	);
}