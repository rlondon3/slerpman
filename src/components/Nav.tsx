import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from '@mui/material';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import GitHubIcon from '@mui/icons-material/GitHub';
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
					component={Link}
					target='_blank'
					rel='noopener noreferrer'
					label='Ralph Smith'
					icon={<HomeIcon fontSize='small' />}
					sx={{ '&:hover': { cursor: 'pointer' } }}
					onClick={() => window.open('https://codesmithr.com', '_blank')}
				/>
				<StyledBreadcrumb
					component={Link}
					target='_blank'
					rel='noopener noreferrer'
					label='Github'
					icon={<GitHubIcon fontSize='small' />}
					sx={{ '&:hover': { cursor: 'pointer' } }}
					onClick={() =>
						window.open('https://github.com/rlondon3/slerpman', '_blank')
					}
				/>
				<StyledBreadcrumb
					component={Link}
					target='_blank'
					rel='noopener noreferrer'
					label='Blog'
					icon={<RssFeedIcon fontSize='small' />}
					sx={{ '&:hover': { cursor: 'pointer' } }}
					onClick={() =>
						window.open('https://programmingthestreets.hashnode.dev', '_blank')
					}
				/>
			</Breadcrumbs>
		</Grid2>
	);
}
