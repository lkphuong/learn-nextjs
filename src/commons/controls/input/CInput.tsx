//#region Import
import { ReactNode, Ref } from 'react';

import classNames from 'classnames';

import './index.scss';
//#endregion

type Props = {
	onChange?: () => void;
	onClickSuffix?: () => void;
	onKeyPress?: (e: any) => void;

	inputRef?: Ref<HTMLInputElement> | null;
	value?: string;
	disabled?: boolean;
	name?: string;
	suffixIcon?: ReactNode;
	autoComplete?: string;
	label?: string;
	placeholder?: string;
	prefixIcon?: ReactNode;
	className?: string;

	styles?: {
		suffixIcon?: string;
	};
};

export const CInput = ({
	value,
	name,
	label,
	placeholder,
	prefixIcon,
	autoComplete,
	suffixIcon,
	className,
	disabled,
	styles,
	onClickSuffix,
	onKeyPress,
	onChange,
	inputRef,
}: Props) => {
	return (
		<div
			className={classNames(
				'form-item form-item-input',
				{
					disabled: disabled,
				},
				className,
			)}
		>
			<label className="space-y-[0.5rem]" id={name} htmlFor={name}>
				<span className="form-item-label">{label}</span>

				<div
					className={classNames('input', {
						disabled: disabled,
					})}
				>
					{prefixIcon && <span className="input-prefix">{prefixIcon}</span>}

					<input
						ref={inputRef}
						value={value}
						onChange={onChange}
						disabled={disabled}
						type="text"
						placeholder={placeholder}
						autoComplete={autoComplete}
						onKeyPress={onKeyPress}
					/>

					{suffixIcon && (
						<span
							className={`input-suffix cursor-pointer hover:text-primary ${styles?.suffixIcon}`}
							onClick={onClickSuffix}
						>
							{suffixIcon}
						</span>
					)}
				</div>
			</label>
		</div>
	);
};

export default CInput;
