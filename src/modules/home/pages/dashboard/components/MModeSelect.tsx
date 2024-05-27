'use client';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@commons/libs/components/ui/select';

export type MModeSelectProps = {
	selected: string;
	onChange: (v: string) => void;
};

export const MModeSelect = ({ selected, onChange }: MModeSelectProps) => {
	return (
		<Select value={selected} onValueChange={onChange}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select mode transcription" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem value="text-speech">Text to speech</SelectItem>
					<SelectItem value="speech-text">Speech to text</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};
