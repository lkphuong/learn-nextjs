'use client';

import { CAvatar } from '../avatar/CAvatar';

export const CHeader = () => {
	return (
		<header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 ">
			<div className="flex-1"></div>
			<div>
				<CAvatar />
			</div>
		</header>
	);
};

export default CHeader;
