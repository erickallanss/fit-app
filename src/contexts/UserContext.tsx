import { createContext, useState } from 'react';

// Tipagem
interface UserContextType {
	name: string;
	currentWeight: number;
	weekGoal: number;
	consecutiveWeeks: number;
	loginName: string;
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
		weekGoal: 2,
		consecutiveWeeks: 3,
		loginName,
	};

	return (
		<UserContext.Provider value={contextValues}>
			{children}
		</UserContext.Provider>
	);
}
