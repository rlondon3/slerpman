import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import SlerpeeForm from './SlerpeeForm';
import SlerpeeList from './SlerpeeList';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	...theme.applyStyles('dark', {
		backgroundColor: '#1A2027',
	}),
}));

export default function BasicGrid() {
	return (
		<Box sx={{ flexGrow: 1, color: 'black' }}>
			<Grid
				container
				spacing={2}
			>
				<Grid size={2}>
					<Item>Select One of My APIs</Item>
				</Grid>
				<Grid>
					<SlerpeeForm />
				</Grid>
				<Grid size={2}>
					<SlerpeeList />
				</Grid>
				<Grid size={2}>
					<SlerpeeList />
				</Grid>
			</Grid>
		</Box>
	);
}
