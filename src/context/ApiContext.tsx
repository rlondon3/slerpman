import React, { createContext, useState, useContext, ReactNode } from 'react';
import axios from 'axios';

interface ApiContextType {
	url: string;
	setUrl: (url: string) => void;
	method: string;
	setMethod: (method: string) => void;
	body: string;
	setBody: (body: string) => void;
	response: unknown;
	setResponse: (response: unknown) => void;
	handleRequest: () => Promise<void>;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

interface ApiProviderProps {
	children: ReactNode;
}

export function ApiProvider({ children }: ApiProviderProps) {
	const [url, setUrl] = useState<string>('');
	const [method, setMethod] = useState<string>('GET');
	const [body, setBody] = useState<string>('{ }');
	const [response, setResponse] = useState<unknown>(null);

	const handleRequest = async () => {
		try {
			const config = {
				method,
				url,
				data: body ? JSON.parse(body) : null,
			};
			const res = await axios(config);
			setResponse(res.data);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				setResponse(error.response?.data || error.message);
			} else {
				setResponse('An error occurred');
			}
		}
	};

	return (
		<ApiContext.Provider
			value={{
				url,
				setUrl,
				method,
				setMethod,
				body,
				setBody,
				response,
				setResponse,
				handleRequest,
			}}
		>
			{children}
		</ApiContext.Provider>
	);
}

export function useApi(): ApiContextType {
	const context = useContext(ApiContext);
	if (context === undefined) {
		throw new Error('useApi must be used within an ApiProvider');
	}
	return context;
}
