import { Reportdata } from './Reportdata';
import { PictorialData } from './PictorialData';
import { Othercontent } from './Othercontent';
import { Button } from '@mui/material';

export function Maincontent() {
	return (
		<div className="maincontent">
			<div className="first-row">
				<h3>Dashboard</h3>
				<Button variant="outlined" color="primary">
					Click me
				</Button>
			</div>
			<Reportdata />
			<PictorialData />
			<Othercontent />
		</div>
	);
}