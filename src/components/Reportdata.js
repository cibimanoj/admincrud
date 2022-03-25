import CalendarToday from '@mui/icons-material/CalendarToday';
import { FaDollarSign, FaRegComments } from 'react-icons/fa';
import { BiNotepad } from 'react-icons/bi';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export function Reportdata() {
	return (
		<section className="display-report">
			<div className="report monthly">
				<div className="report-type">
					<div className="report-heading monthly-heading">EARNINGS (MONTHLY)</div>
					<div className="report-value">$70,000</div>
				</div>
				<div className="report-logo">
					<CalendarToday />
				</div>
			</div>

			<div className="report annual">
				<div className="report-type">
					<div className="report-heading annual-heading">EARNINGS (ANNUAL)</div>
					<div className="report-value">$240,000</div>
				</div>
				<div className="report-logo">
					<FaDollarSign />
				</div>
			</div>

			<div className="report task">
				<div className="report-type">
					<div className="report-heading task-heading">TASKS</div>
					<div className="report-value">50%</div>
				</div>
				<Box sx={{ width: '35%' }}>
					<LinearProgress variant="determinate" value={50} className="progress-bar" />
				</Box>
				<div className="report-logo">
					<BiNotepad />
				</div>
			</div>

			<div className="report request">
				<div className="report-type">
					<div className="report-heading request-heading">PENDING REQUESTS</div>
					<div className="report-value">12</div>
				</div>
				<div className="report-logo">
					<FaRegComments />
				</div>
			</div>
		</section>
	);
}