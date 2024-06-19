import { createContext, useContext, useState, ReactNode } from 'react';

interface BottomBarContextProps {
	selectedButton: string;
	setSelectedButton: (selected: string) => void;
}

const BottomBarContext = createContext<BottomBarContextProps | undefined>(
	undefined,
);

export const BottomBarProvider = ({ children }: { children: ReactNode }) => {
	const [selectedButton, setSelectedButton] = useState<string>('user');

	return (
		<BottomBarContext.Provider
			value={{ selectedButton, setSelectedButton }}
		>
			{children}
		</BottomBarContext.Provider>
	);
};

export const useBottomBar = (): BottomBarContextProps => {
	const context = useContext(BottomBarContext);
	if (!context) {
		throw new Error('useBottomBar must be used within a BottomBarProvider');
	}
	return context;
};
