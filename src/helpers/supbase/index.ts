import { createClient } from '@supabase/supabase-js';

import {
	SUPABASE_ANON_KEY,
	SUPABASE_URL,
	SUPBASE_BUCKET_NAME,
} from '@configs/_constant';

export const supabaseUrl = SUPABASE_URL || '';
export const supabaseKey = SUPABASE_ANON_KEY || '';
export const bucketName = SUPBASE_BUCKET_NAME || '';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
