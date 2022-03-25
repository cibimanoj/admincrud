import { Avatar, Button, IconButton } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import { Mail } from '@mui/icons-material';
import { blue } from '@mui/material/colors';
import { useEffect, useState } from 'react';

export function Viewprofile() {
	const { id } = useParams();
	// console.log(id);
	const [userData, setUserData] = useState(null);

	// To get user profile details from the database and store the data in userData
	useEffect(() => {
		fetch(`https://61518b634a5f22001701d293.mockapi.io/user/${id}`, {
			method: 'GET',
		})
			.then((data) => data.json())
			.then((ud) => setUserData(ud));
	}, []);
	return userData ? <ShowProfile userData={userData} /> : '';
}

// higher order function to show user profile
function ShowProfile({ userData }) {
	const history = useHistory();

	return (
		<div className="viewprofile-wrapper">
			<div className="user-main">
				<div className="user-main-wrapper">
					<h3>{userData.name}</h3>
					<Avatar className="profile-pic" alt={userData.name} src={userData.profilepic} />
					<p className="about-user">{userData.about}</p>
					<p className="location">{userData.location}</p>

					{/* {email} */}
					<IconButton className="mail-user">
						<Avatar sx={{ bgcolor: blue[500] }}>
							<Mail />
						</Avatar>
					</IconButton>
					<div className="btns-user">
						<Button size="small" color="primary" onClick={() => history.goBack()}>
							Back
						</Button>
						<Button
							size="small"
							color="primary"
							onClick={() => history.push(`/edit-profile/${userData.id}`)}
						>
							Edit Profile
						</Button>
					</div>
				</div>
			</div>
			<div className="user-other">
				<div className="hobby">
					<h3>Hobby {userData.hobby} </h3>
					<p>
						A hobby is considered to be a regular activity that is done for enjoyment, typically
						during one's leisure time. Hobbies include collecting themed items and objects, engaging
						in creative and artistic pursuits, playing sports, or pursuing other amusements.
					</p>
				</div>
				<div className="food">
					<h3>Favourite Food {userData.food}</h3>
					<p>
						A hobby is considered to be a regular activity that is done for enjoyment, typically
						during one's leisure time. Hobbies include collecting themed items and objects, engaging
						in creative and artistic pursuits, playing sports, or pursuing other amusements.
					</p>
				</div>
				<div className="sport">
					<h3>Favourite Sport {userData.sport}</h3>
					<p>
						A hobby is considered to be a regular activity that is done for enjoyment, typically
						during one's leisure time. Hobbies include collecting themed items and objects, engaging
						in creative and artistic pursuits, playing sports, or pursuing other amusements.
					</p>
				</div>
			</div>
		</div>
	);
}