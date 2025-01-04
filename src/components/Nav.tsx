import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Theme } from '../utils/ColorTheme';
import { Grid2 } from '@mui/material';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
	const backgroundColor =
		theme.palette.mode === 'light'
			? Theme.palette.secondary.main
			: Theme.palette.secondary.main;
	return {
		fontSize: '18px',
		backgroundColor,
		height: theme.spacing(5),
		paddingLeft: '4px',
		paddingRight: '4px',
		color: theme.palette.text.primary,
		fontWeight: theme.typography.fontWeightRegular,
		'&:hover, &:focus': {
			backgroundColor: Theme.palette.secondary.light,
		},
		'&:active': {
			boxShadow: theme.shadows[1],
			backgroundColor: emphasize(backgroundColor, 0.12),
		},
	};
}) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
}

export default function CustomizedBreadcrumbs() {
	return (
		<Grid2
			container
			direction='row'
			sx={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
			role='presentation'
			onClick={handleClick}
		>
			<Breadcrumbs aria-label='breadcrumb'>
				<StyledBreadcrumb
					component='a'
					href='#'
					label='Home'
					icon={<HomeIcon fontSize='small' />}
				/>
				<StyledBreadcrumb
					component='a'
					href='#'
					label='Catalog'
				/>
				<StyledBreadcrumb
					label='Accessories'
					deleteIcon={<ExpandMoreIcon />}
					onDelete={handleClick}
				/>
			</Breadcrumbs>
		</Grid2>
	);
}
