'use client';

import { RefObject, useEffect } from 'react';

type Props = {
	ref: RefObject<any>;

	onClick: () => void;
};

export const useOutside = ({ ref, onClick }: Props) => {
	useEffect(() => {
		const handleClickOutside = (event: Event) => {
			if (ref?.current && !ref.current.contains(event.target)) {
				onClick();
			}
		};

		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);

		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [onClick, ref]);
};
