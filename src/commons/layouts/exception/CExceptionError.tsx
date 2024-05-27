//#region IMPORT
import { lazy } from 'react';

const CButton = lazy(() => import('@commons/controls/button/CButton'));

import { useRouter } from 'next/navigation';

import { X } from 'lucide-react';

import './index.scss';
//#endregion

export const CExceptionError = () => {
	const router = useRouter();

	const onClick = () => router.push('/');

	return (
		<div className="exception flex min-h-screen flex-col items-center justify-center">
			<div className="exception-icon">
				<X color="blue" />
			</div>

			<div className="exception-text">
				Something went wrong. Please try again or report by contacting
				supporter.
			</div>

			<div className="exception-button mt-[-1rem]">
				<CButton
					type="secondary"
					size="large"
					onClick={onClick}
					innerText="Back to homepage"
				/>
			</div>
		</div>
	);
};

export default CExceptionError;
