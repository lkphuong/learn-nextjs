import Link from 'next/link';

import { Mic } from 'lucide-react';

export const CNavigation = () => {
	return (
		<div className="hidden border-r bg-muted/60 md:block">
			<div className="flex h-full max-h-screen flex-col gap-2">
				<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
					<Link
						href="/"
						className="flex items-center gap-2 text-[1rem] font-semibold"
					>
						<span>CCL Master Transcription</span>
					</Link>
				</div>
				<div className="flex-1">
					<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
						<Link
							href="/"
							className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
						>
							<Mic className="h-4 w-4" />
							Transcription
						</Link>
					</nav>
				</div>
			</div>
		</div>
	);
};
