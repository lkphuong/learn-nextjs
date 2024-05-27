/* eslint-disable import/no-named-as-default-member */
'use client';

import { useEffect, useRef, useState } from 'react';
import { useAudioRecorder } from 'react-audio-voice-recorder';

import classNames from 'classnames';

import { CButtonLoader } from '@commons/controls/button/CButtonLoader';
import { Button } from '@commons/libs/components/ui/button';
import { Textarea } from '@commons/libs/components/ui/textarea';

import { gptFetcher } from '@helpers/chatgpt';

import alert from '@utils/notyf';

import { MModeSelect } from '@modules/home/pages/dashboard/components/MModeSelect';
import { MTransHeader } from '@modules/home/pages/dashboard/components/MTranscription';

export default function Home() {
	const inputRef = useRef<HTMLTextAreaElement>(null);
	const { startRecording, stopRecording, recordingBlob, isRecording } =
		useAudioRecorder();

	const [isLoading, setIsLoading] = useState(false);
	const [mode, setMode] = useState('text-speech');

	useEffect(() => {
		if (mode === 'speech-text' && recordingBlob) {
			try {
				const form = new FormData();

				form.append('model', 'whisper-1');
				form.append('file', recordingBlob, 'record.mp3');

				const getText = async () => {
					const result = await gptFetcher.post('/audio/transcriptions', form);

					if (result.data?.text) {
						fetch('/api/transcription', {
							method: 'POST',
							body: JSON.stringify({
								text: result.data.text,
							}),
						});
					}

					if (inputRef.current) {
						inputRef.current.value = result.data?.text || '';
					}
				};

				getText();
			} catch (err) {
				console.log('Error', err);
			}
		}
	}, [mode, recordingBlob]);

	const handleChangeMode = (v: string) => {
		setMode(v);

		if (inputRef.current) {
			inputRef.current.value = '';
		}
	};

	const handleStartRecord = async () => {
		startRecording();
	};

	const handleStopRecord = async () => {
		stopRecording();
	};

	const handleConvertTextToSpeech = async () => {
		const text = inputRef.current?.value;

		if (!text) {
			return alert.error('Please enter text first!');
		}

		const data = {
			model: 'tts-1',
			input: text,
			voice: 'echo',
		};

		setIsLoading(true);

		const result = await gptFetcher.post('/audio/speech', data, {
			responseType: 'blob',
		});

		const audio = new Audio(URL.createObjectURL(result.data));

		await audio.play();

		setIsLoading(false);

		fetch('/api/transcription', {
			method: 'POST',
			body: JSON.stringify({ text }),
		});
	};

	return (
		<div className="space-y-[1rem]">
			<MTransHeader />

			<MModeSelect selected={mode} onChange={handleChangeMode} />

			<div
				className={classNames(`flex flex-col justify-center gap-[1rem]`, {
					'flex-col-reverse': mode === 'speech-text',
				})}
			>
				<Textarea
					ref={inputRef}
					cols={10}
					className="min-h-[50vh]"
					placeholder="Type your message here."
					disabled={mode === 'speech-text'}
				/>

				{mode === 'text-speech' && (
					<Button
						size="lg"
						disabled={isLoading}
						className="w-[14rem]"
						onClick={handleConvertTextToSpeech}
					>
						{isLoading ? <CButtonLoader /> : 'Convert to speech'}
					</Button>
				)}

				{mode === 'speech-text' && (
					<Button
						size="lg"
						className={classNames(`w-[14rem]`, {
							'bg-red-500 text-white': isRecording,
						})}
						onClick={isRecording ? handleStopRecord : handleStartRecord}
					>
						{isRecording ? 'Stop Voice Recording' : 'Start Voice Recording'}
					</Button>
				)}
			</div>
		</div>
	);
}
