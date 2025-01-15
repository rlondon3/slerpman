import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Theme } from '../utils/ColorTheme';
import { Button, Grid2 } from '@mui/material';
import HeadersForm from './SlerpeeHeaders';
import { useApi } from '../context/ApiContext';
import { ChangeEvent } from 'react';

//you need to move the handle method to the submit so that it doesn't update the method in slerplist when selecting the method- its confusing!
export default function SlerpeeForm() {
	const {
		url,
		setUrl,
		method,
		setMethod,
		body,
		setBody,
		handleRequest,
		headers,
		setHeaders,
	} = useApi();

	const handleUrl = (e: ChangeEvent<HTMLInputElement>) => {
		setUrl(e.target.value);
	};

	const handleMethod = (e: ChangeEvent<HTMLInputElement>) => {
		setMethod(e.target.value);
	};

	const handleBody = (e: ChangeEvent<HTMLInputElement>) => {
		setBody(e.target.value);
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await handleRequest();
	};

	return (
		<FormControl style={{ width: '100%' }}>
			<Box
				component='form'
				onSubmit={handleSubmit}
				sx={{ '& .MuiTextField-root': { width: '75ch' } }}
				noValidate
				autoComplete='off'
			>
				<Grid2 container>
					<Grid2 size={4}>
						<FormLabel id='demo-radio-buttons-group-label'>
							HTTP Request
						</FormLabel>
						<RadioGroup
							aria-labelledby='demo-radio-buttons-group-label'
							defaultValue='female'
							name='radio-buttons-group'
							value={method}
							onChange={handleMethod}
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
					<Grid2
						size={8}
						style={{ display: 'flex' }}
					>
						<TextField
							id='standard-multiline-flexible'
							label='URL'
							multiline
							maxRows={2}
							variant='standard'
							value={url}
							onChange={handleUrl}
							style={{ marginRight: '16px', width: '30ch' }}
						/>
					</Grid2>
				</Grid2>
				<Grid2
					container
					sx={{ mt: 2 }}
				>
					<Grid2 size={12}>
						<HeadersForm
							headers={headers}
							setHeaders={setHeaders}
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
						value={body}
						onChange={handleBody}
						variant='filled'
					/>
				</div>
				<Button
					type='submit'
					size='small'
					variant='outlined'
					style={{
						height: 'fit-content',
						width: 'inherit',
						marginTop: '18px',
						color: `${Theme.palette.primary.light}`,
						borderColor: `${Theme.palette.primary.light}`,
					}}
				>
					Test
				</Button>
			</Box>
		</FormControl>
	);
}
