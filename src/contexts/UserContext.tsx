import { createContext, useState } from 'react';

// Tipagem
interface UserContextType {
	name: string;
	currentWeight: number;
	targetWeight: number;
	loginName: string;
	saveLoginToCache: (user: string) => void;
}

// Context
export const UserContext = createContext<UserContextType | undefined>(
	undefined,
);

// Provider
export default function UserContextProvider({ children }: any) {
	const [loginName, setLoginName] = useState<string>('');

	const contextValues = {
		name: 'erick',
		currentWeight: 85,
		targetWeight: 90,
		loginName,
		saveLoginToCache,
	};

	function saveLoginToCache(user: string) {
		console.log('Saving user to cache', user);
		if (user !== '') {
			setLoginName(user);
		}
	}

	return (
		<UserContext.Provider value={contextValues}>
			{children}
		</UserContext.Provider>
	);
}
