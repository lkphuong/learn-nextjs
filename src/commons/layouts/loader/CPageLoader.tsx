//#region IMPORT

import classNames from 'classnames';

import './index.scss';
//#endregion

type Props = {
	fullHeight?: boolean;
	withTips?: boolean;
};

export const CPageLoader = ({ fullHeight = true }: Props) => {
	return (
		<div
			className={classNames(
				`page-loader-wrapper flex flex-col w-full items-center justify-center`,
				{
					'min-h-screen': fullHeight,
				},
			)}
		>
			<div className="page-loader"></div>
			<p className="page-loader-text text-primary">
				Loading page. Please wait...
			</p>
		</div>
	);
};

export default CPageLoader;
