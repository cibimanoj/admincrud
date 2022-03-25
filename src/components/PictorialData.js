import {
	LineChart,
	ResponsiveContainer,
	Legend,
	Tooltip,
	Line,
	XAxis,
	YAxis,
	PieChart,
	Pie,
	Cell,
} from 'recharts';
import IconButton from '@mui/material/IconButton';
import { MoreVert } from '@mui/icons-material';
import { Divider, Paper } from '@mui/material';

export function PictorialData() {
	const earningData = [
		{
			month: 'Jan',
			Earnings: 0,
		},
		{
			month: 'Feb',
			Earnings: 10000,
		},
		{
			month: 'Mar',
			Earnings: 5000,
		},
		{
			month: 'Apr',
			Earnings: 15000,
		},
		{
			month: 'May',
			Earnings: 10000,
		},
		{
			month: 'Jun',
			Earnings: 20000,
		},
		{
			month: 'Jul',
			Earnings: 15000,
		},
		{
			month: 'Aug',
			Earnings: 25000,
		},
		{
			month: 'Sep',
			Earnings: 20000,
		},
		{
			month: 'Oct',
			Earnings: 30000,
		},
		{
			month: 'Nov',
			Earnings: 25000,
		},
		{
			month: 'Dec',
			Earnings: 35000,
		},
	];

	const revenueSource = [
		{
			name: 'Social',
			color: '#d7d640',
			value: 15,
		},
		{
			name: 'Direct',
			color: '#1CC88A',
			value: 30,
		},
		{
			name: 'Refferal',
			color: '#4E73DF',
			value: 55,
		},
	];

	return (
		<div className="pictorial-data">
			<Paper className="graph" elevation={5}>
				<div className="graph-div">
					<div className="data-title">
						<h3>Earnings Overview</h3>
						<IconButton>
							<MoreVert />
						</IconButton>
					</div>
					<Divider className="pic-divider" variant="fullWidth" />
					<ResponsiveContainer width="100%" aspect={1.8}>
						<LineChart
							data={earningData}
							margin={{
								top: 10,
								right: 20,
								left: 5,
								bottom: 5,
							}}
						>
							<XAxis dataKey="month" interval={2} axisLine={false} tickLine={false} angle={0} />
							<YAxis axisLine={false} tickLine={false} domain={[5000, 40000]} />

							<Tooltip cursor={false} />

							<Line
								type="monotone"
								dataKey="Earnings"
								stroke="#4E73DF"
								strokeWidth={3}
								dot={{ fill: '#4E73DF' }}
								activeDot={{ r: 5 }}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
			</Paper>
			<Paper className="pie-chart" elevation={5}>
				<div className="data-title">
					<h3>Revenue Sources</h3>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
				<div className="pie-chart-div">
					<Divider className="pic-divider" variant="fullWidth" />
					<ResponsiveContainer className="rc-piechart" width="100%" aspect={1.15}>
						<PieChart>
							<Pie
								className="pie-chart-pie"
								data={revenueSource}
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
								outerRadius={75}
								innerRadius={60}
								fill="#8884d8"
								startAngle={90}
								endAngle={450}
							>
								{revenueSource.map((entry, index) => (
									<Cell key={index} fill={entry.color} />
								))}
							</Pie>
							<Legend iconType={'circle'} />
							<Tooltip />
						</PieChart>
					</ResponsiveContainer>
				</div>
			</Paper>
		</div>
	);
}