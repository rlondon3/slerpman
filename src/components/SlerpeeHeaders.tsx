import React, { useState } from 'react';
import { TextField, IconButton, Grid2, Input } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Theme } from '../utils/ColorTheme';

interface HeadersFormProps {
	headers: Array<{ key: string; value: string }>;
	setHeaders: (headers: Array<{ key: string; value: string }>) => void;
}

const HeadersForm = ({ headers = [], setHeaders }: HeadersFormProps) => {
	const [headerPairs, setHeaderPairs] = useState(
		headers?.length > 0 ? headers : [{ key: '', value: '' }]
	);

	const handleAddHeader = () => {
		setHeaderPairs([...headerPairs, { key: '', value: '' }]);
	};

	const handleRemoveHeader = (index: number) => {
		const newHeaders = headerPairs.filter((_, idx) => idx !== index);
		setHeaderPairs(newHeaders);
		setHeaders(newHeaders);
	};

	const handleHeaderChange = (
		index: number,
		field: 'key' | 'value',
		value: string
	) => {
		const newHeaders = headerPairs.map((header, idx) => {
			if (idx === index) {
				return { ...header, [field]: value };
			}
			return header;
		});
		setHeaderPairs(newHeaders);
		setHeaders(newHeaders);
	};

	return (
		<div style={{ marginTop: '16px' }}>
			<Grid2
				container
				spacing={2}
			>
				<Grid2
					xs={12}
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginBottom: '8px',
					}}
				>
					<AddIcon
						onClick={handleAddHeader}
						style={{
							color: Theme.palette.primary.light,
							borderColor: Theme.palette.primary.light,
							cursor: 'pointer',
						}}
					/>

					{headerPairs.map((header, index) => (
						<Grid2
							container
							key={index}
							spacing={2}
							xs={12}
							style={{ marginBottom: '8px' }}
						>
							<Grid2 xs={5}>
								<Input
									placeholder='Header Key'
									value={header.key}
									onChange={(e) =>
										handleHeaderChange(index, 'key', e.target.value)
									}
								/>
							</Grid2>
							<Grid2 xs={5}>
								<Input
									placeholder='Header Value'
									value={header.value}
									onChange={(e) =>
										handleHeaderChange(index, 'value', e.target.value)
									}
								/>
							</Grid2>
							<Grid2
								xs={2}
								style={{ display: 'flex', alignItems: 'center' }}
							>
								<IconButton
									onClick={() => handleRemoveHeader(index)}
									size='small'
									style={{ color: Theme.palette.error.main }}
								>
									<DeleteIcon />
								</IconButton>
							</Grid2>
						</Grid2>
					))}
				</Grid2>
			</Grid2>
		</div>
	);
};

export default HeadersForm;
