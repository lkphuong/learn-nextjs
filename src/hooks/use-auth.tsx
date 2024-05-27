//#region IMPORT
import supabase from '@helpers/supbase';

import { useAuthStore } from '@stores/auth';

//#endregion

export function useAuth() {
	const { isLoggedIn, user, setIsLoggedIn, setUser } = useAuthStore(
		(state) => ({
			isLoggedIn: state.isLoggedIn,
			user: state.user,
			setIsLoggedIn: state.setIsLoggedIn,
			setUser: state.setUser,
		}),
	);
	// const auth = getAuth();

	//#region FUNC
	const authenticate = async (user: any) => {
		setUser(user || null);
		setIsLoggedIn(true);

		return user;
	};
	const clearAuthCredential = () => {
		setIsLoggedIn(false);
		setUser(null);
	};
	const logout = async () => {
		await supabase.auth.signOut();
		clearAuthCredential();
	};

	//#endregion
	return {
		isLoggedIn,
		user,
		authenticate,
		setUser,
		logout,
	};
}
