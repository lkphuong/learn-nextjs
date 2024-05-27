//#region Import
import { ReactNode } from 'react';

import classNames from 'classnames';

import { CButtonLoader } from './CButtonLoader';
import {
	THtmlTypeButton,
	TIconPosition,
	TSizeButton,
	TTypeButton,
} from './types';

import './index.scss';
//#endregion

type Props = {
	innerText: string;

	isLoading?: boolean;
	htmlType?: THtmlTypeButton;
	size?: TSizeButton;
	className?: string;
	type?: TTypeButton;
	prefixIcon?: ReactNode;
	iconPosition?: TIconPosition;
	disabled?: boolean;
	onClick?: () => void;

	styles?: {
		buttonClass?: string;
		wrapperClass?: string;
	};
};

export const CButton = ({
	type,
	innerText,
	prefixIcon,
	size = 'small',
	iconPosition = 'left',
	disabled = false,
	htmlType = 'button',
	isLoading = false,
	onClick,
	styles,
}: Props) => {
	const _onClick = () => {
		if (onClick) onClick();
	};

	return (
		<div className={`btn relative ${styles?.wrapperClass}`}>
			<button
				className={classNames(
					'button flex items-center justify-center gap-[0.8rem] rounded-[0.5rem] w-full',
					{
						'flex-row-reverse': iconPosition === 'right',
						[`button-${size}`]: size,
						[`button-${type}`]: type,
						loading: isLoading,
					},
					styles?.buttonClass,
				)}
				disabled={disabled && !isLoading}
				onClick={_onClick}
				type={htmlType}
			>
				{prefixIcon && <span className="input-prefix">{prefixIcon}</span>}

				{isLoading ? <CButtonLoader /> : innerText}
			</button>
		</div>
	);
};

export default CButton;
