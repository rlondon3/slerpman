import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import { Grid2 } from '@mui/material';

function generate(element: React.ReactElement<unknown>) {
	return [0, 1, 2].map((value) =>
		React.cloneElement(element, {
			key: value,
		})
	);
}

const Demo = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
}));

export default function SlerpeeList() {
	const [dense, setDense] = React.useState(false);
	const [secondary, setSecondary] = React.useState(false);

	return (
		<Box sx={{ flexGrow: 1, maxWidth: 752 }}>
			<FormGroup row>
				<FormControlLabel
					control={
						<Checkbox
							checked={dense}
							onChange={(event) => setDense(event.target.checked)}
						/>
					}
					label='Remove Status Details'
				/>
				<FormControlLabel
					control={
						<Checkbox
							checked={secondary}
							onChange={(event) => setSecondary(event.target.checked)}
						/>
					}
					label='Status Detail'
				/>
			</FormGroup>
			<Grid2
				item
				xs={12}
				md={6}
			>
				<Typography
					sx={{ mt: 4, mb: 2 }}
					variant='h6'
					component='div'
				>
					Icon with text
				</Typography>
				<Demo>
					<List dense={dense}>
						{generate(
							<ListItem>
								<ListItemIcon>
									<FolderIcon />
								</ListItemIcon>
								<ListItemText
									primary='Single-line item'
									secondary={secondary ? 'Secondary text' : null}
								/>
							</ListItem>
						)}
					</List>
				</Demo>
			</Grid2>
		</Box>
	);
}
