import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import { Grid2 } from '@mui/material';
import { useApi } from '../context/ApiContext';
import { Theme } from '../utils/ColorTheme';

interface ApiResponse {
	error?: string;
	status?: number;
	data?: unknown;
	message?: string;
}

const Demo = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
}));

export default function SlerpeeList() {
	const [dense, setDense] = React.useState(false);
	const { response, method } = useApi();

	const getIcon = () => {
		if (!response) return <DoNotDisturbOnIcon />;

		if (typeof response === 'string') {
			if (response.includes('<!DOCTYPE html>')) {
				return <ErrorOutlineIcon color='error' />;
			}
			if (response.includes('error')) {
				return <ErrorOutlineIcon color='error' />;
			}
		}

		if (typeof response === 'object' && response !== null) {
			const typedResponse = response as ApiResponse;
			if (
				typedResponse.error ||
				(typedResponse.status && typedResponse.status >= 400)
			) {
				return <ErrorOutlineIcon color='error' />;
			}
		}

		return <CheckCircleOutlineIcon color='success' />;
	};

	return (
		<Box sx={{ flexGrow: 1, maxWidth: 752 }}>
			<Grid2
				xs={12}
				md={6}
			>
				<Typography
					sx={{ mt: 4, mb: 2 }}
					variant='h6'
					component='div'
				>
					API Response
				</Typography>
				<Demo>
					<List dense={dense}>
						<ListItem>
							<ListItemIcon>{getIcon()}</ListItemIcon>
							<ListItemText
								primary={`${
									method && response ? `${method} method response` : 'No Calls'
								}`}
								secondary={
									response
										? JSON.stringify(response, null, 2)
										: 'No response yet'
								}
							/>
						</ListItem>
					</List>
				</Demo>
			</Grid2>
		</Box>
	);
}
