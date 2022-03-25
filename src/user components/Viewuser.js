import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { Getallusers } from './Getalluser';
import { useState, useEffect } from 'react';

export function Viewuser() {
	const [userValue, setUserValue] = useState([]);
	// const userlist = Getalluserdata();
	const Getalluserdata = () => {
		fetch('https://61518b634a5f22001701d293.mockapi.io/user/', {
			method: 'GET',
		})
			.then((data) => data.json())
			.then((users) => setUserValue(users));

		// return userValue;
	};
	useEffect(Getalluserdata, []);
	const deleteUser = (id) => {
		fetch(`https://61518b634a5f22001701d293.mockapi.io/user/${id}`, {
			method: 'DELETE',
		}).then(() => Getalluserdata());
	};
	const history = useHistory();
	return (
		<div>
			{userValue
				.filter((e) => e.name !== 'admin')
				.map(({ id, name, email }) => (
					<Getallusers
						id={id}
						name={name}
						email={email}
						editButton={
							<Button
								type="button"
								size="small"
								color="primary"
								aria-label="edit user"
								onClick={() => history.push(`/edit-user/${id}`)}
							>
								Edit
							</Button>
						}
						deleteButton={
							<Button
								type="button"
								size="small"
								color="error"
								aria-label="delete"
								onClick={() => deleteUser(id)}
							>
								Delete
							</Button>
						}
					/>
				))}
		</div>
	);
}