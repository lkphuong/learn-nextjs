import OpenAI from 'openai';

console.log(process.env.OPENAI_API_KEY);

const openai = new OpenAI({
	apiKey: ``,
	dangerouslyAllowBrowser: true,
});

export const generateTextToSpeech = async (text: string) => {
	const mp3 = await openai.audio.speech.create({
		model: 'tts-1',
		voice: 'echo',
		input:
			text ??
			'The speech endpoint takes in three key inputs: the model, the text that should be turned into audio, and the voice to be used for the audio generation. A simple request would look like the following',
	});

	const buffer = Buffer.from(await mp3.arrayBuffer());
	return buffer;
};
