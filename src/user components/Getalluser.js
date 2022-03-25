export function Getallusers({ id, name, email, editButton, deleteButton }) {
	return (
		<div className="user-list-content">
			<div className="user-list-col1">{name}</div>
			<div className="user-list-col2">{email}</div>
			<div className="user-list-col3">
				{editButton}
				{deleteButton}
			</div>
		</div>
	);
}