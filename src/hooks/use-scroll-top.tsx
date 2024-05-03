'use client';

import { useEffect, useState } from 'react';

export const useScrollTop = (threshold = 10) => {
	const [isScroll, setIsScroll] = useState<Boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > threshold) {
				return setIsScroll(true);
			}

			setIsScroll(false);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [threshold]);

	return { isScroll };
};
