import supabase from '@helpers/supbase';

export const fetchUser = () => {
	return supabase.auth.getUser();
};
