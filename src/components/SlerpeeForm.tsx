import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Theme } from '../utils/ColorTheme';
import { Grid2 } from '@mui/material';

export default function SlerpeeForm() {
	return (
		<FormControl>
			<Box
				component='form'
				sx={{ '& .MuiTextField-root': { width: '75ch' } }}
				noValidate
				autoComplete='off'
			>
				<Grid2
					container
					spacing={2}
				>
					<Grid2 size={6}>
						<FormLabel id='demo-radio-buttons-group-label'>
							HTTP Request
						</FormLabel>
						<RadioGroup
							aria-labelledby='demo-radio-buttons-group-label'
							defaultValue='female'
							name='radio-buttons-group'
							style={{ flexDirection: 'row' }}
						>
							<FormControlLabel
								value='GET'
								control={<Radio />}
								label='GET'
								style={{ color: `${Theme.palette.primary.main}` }}
							/>
							<FormControlLabel
								value='POST'
								control={<Radio />}
								label='POST'
								style={{ color: `${Theme.palette.primary.dark}` }}
							/>
							<FormControlLabel
								value='PUT'
								control={<Radio />}
								label='PUT'
								style={{ color: `${Theme.palette.secondary.main}` }}
							/>
							<FormControlLabel
								value='DELETE'
								control={<Radio />}
								label='DELETE'
								style={{ color: `${Theme.palette.primary.light}` }}
							/>
						</RadioGroup>
					</Grid2>
					<Grid2 size={6}>
						<TextField
							id='standard-multiline-flexible'
							label='URL'
							multiline
							maxRows={4}
							variant='standard'
							style={{ marginRight: '16px' }}
						/>
					</Grid2>
				</Grid2>
				<div>
					<TextField
						id='filled-multiline-static'
						label='Body'
						multiline
						sx={{ mt: 2, width: '55ch' }}
						rows={18}
						defaultValue='{ }'
						variant='filled'
					/>
				</div>
			</Box>
		</FormControl>
	);
}
