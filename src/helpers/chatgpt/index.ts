import axios from 'axios';

import { CHAT_GPT_API_URL, CHAT_GPT_KEY } from '@configs/_constant';

// const chatgpt = new ChatGPTAPI({
// 	apiKey: CHAT_GPT_KEY || '',
// });

export const gptFetcher = axios.create({
	baseURL: CHAT_GPT_API_URL,
	validateStatus: (status) => {
		const strStatus = status.toString();

		return strStatus.startsWith('2') || strStatus === '404';
	},
	headers: {
		Authorization: `Bearer ${CHAT_GPT_KEY}`,
	},
});

export default gptFetcher;
