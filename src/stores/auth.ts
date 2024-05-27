//#region IMPORT
import { create } from 'zustand';

//#endregion

export type TAuthState = {
	user: any | null;
	isLoggedIn: boolean;
};

export type TAuthActions = {
	setIsLoggedIn: (isLoggedIn: boolean) => void;
	setUser: (user: any | null) => void;
};

export const useAuthStore = create<TAuthState & TAuthActions>((set) => ({
	user: null,
	isLoggedIn: false,
	setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
	setUser: (user) => set({ user }),
}));
