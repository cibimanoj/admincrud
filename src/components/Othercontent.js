import { Divider, Paper } from '@mui/material';
import { ProgressBar } from './progressBar';

function Theme({ name, color, index }) {
	return (
		<div
			className={`color-box ${name === 'Light' ? 'white-color' : ''}`}
			key={index}
			style={{ backgroundColor: color }}
		>
			<p className="color-title">{name}</p>
			<p>{color}</p>
		</div>
	);
}

export function Othercontent() {
	const project = [
		{
			title: 'server',
			heading: 'Server Migration',
			value: 20,
		},
		{
			title: 'sales',
			heading: 'Sales Tracking',
			value: 40,
		},
		{
			title: 'customer',
			heading: 'Customer Database',
			value: 60,
		},
		{
			title: 'payout',
			heading: 'Payout Details',
			value: 80,
		},
		{
			title: 'account',
			heading: 'Account Setup',
			value: 100,
		},
	];

	const theme = [
		{
			name: 'Primary',
			color: '#4e73df',
		},
		{
			name: 'Success',
			color: '#1cc88a',
		},
		{
			name: 'Info',
			color: '#36b9cc',
		},
		{
			name: 'Warning',
			color: '#f6c23e',
		},
		{
			name: 'Danger',
			color: '#e74a3b',
		},
		{
			name: 'Secondary',
			color: '#858796',
		},
		{
			name: 'Light',
			color: '#f8f9fc',
		},
		{
			name: 'Dark',
			color: '#5a5c69',
		},
	];
	return (
		<div className="othercontent-wrapper">
			<div className="column1">
				<Paper className="project-progress" elevation={5}>
					<div>
						<div className="data-title">
							<h4>Projects</h4>
						</div>
						<Divider className="pic-divider" variant="fullWidth" />
						<div className="progress-data">
							{project.map(({ title, heading, value }, index) => (
								<ProgressBar title={title} heading={heading} value={value} key={index} />
							))}
						</div>
					</div>
				</Paper>

				<div className="color-theme">
					{theme.map(({ name, color }, index) => (
						<Theme name={name} color={color} index={index} />
					))}
				</div>
			</div>
			<div className="column2">
				<Paper className="project-progress" elevation={5}>
					<div className="illustrations">
						<div className="data-title">
							<h4>Earnings Overview</h4>
						</div>
						<Divider className="pic-divider" variant="fullWidth" />
						<div className="illustration-content">
							<div className="img-illustration">
								<img
									src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
									alt="representation"
									aria-label="representation-image"
								/>
							</div>
							<p>
								Add some quality, svg illustrations to your project courtesy of unDraw, a constantly
								updated collection of beautiful svg images that you can use completely free and
								without attribution!
							</p>
							<a target="_blank" rel="noreferrer" href="https://undraw.co/">
								Browse Illustrations on unDraw →
							</a>
						</div>
					</div>
				</Paper>
				<Paper className="project-progress" elevation={5}>
					<div className="development">
						<div className="data-title">
							<h4>Development Approach</h4>
						</div>
						<Divider className="pic-divider" variant="fullWidth" />
						<p>
							SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS
							bloat and poor page performance. Custom CSS classes are used to create custom
							components and custom utility classes.
						</p>
						<p>
							Before working with this theme, you should become familiar with the Bootstrap
							framework, especially the utility classes.
						</p>
					</div>
				</Paper>
			</div>
		</div>
	);
}