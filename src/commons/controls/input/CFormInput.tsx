//#region Import
import { KeyboardEvent, ReactNode } from 'react';
import {
	Control,
	Controller,
	FieldErrors,
	FieldValues,
	Path,
	PathValue,
} from 'react-hook-form';

import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames';

import './index.scss';
//#endregion

type Props<T extends FieldValues> = {
	control: Control<T, any>;
	name: Path<T>;

	onClickSuffix?: () => void;
	onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;

	disabled?: boolean;
	errors?: FieldErrors<FieldValues>;
	suffixIcon?: ReactNode;
	autoComplete?: string;
	label?: string;
	defaultValue?: PathValue<T, Path<T>>;
	placeholder?: string;
	prefixIcon?: ReactNode;
	rules?: FieldValues;
	className?: string;

	styles?: {
		suffixIcon?: string;
	};
};

export const CFormInput = <T extends FieldValues>({
	control,
	defaultValue,
	label,
	name,
	placeholder,
	prefixIcon,
	rules,
	errors,
	autoComplete,
	suffixIcon,
	className,
	disabled,
	styles,
	onClickSuffix,
	onKeyPress,
}: Props<T>) => {
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
				<Controller
					control={control}
					name={name}
					defaultValue={defaultValue}
					rules={rules}
					render={({ field }) => (
						<div
							className={classNames('input', {
								'has-error': !!errors?.[name],
								disabled: disabled,
							})}
						>
							{prefixIcon && <span className="input-prefix">{prefixIcon}</span>}

							<input
								{...field}
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
					)}
				/>
				{errors?.[name] && (
					<div className="error-message">
						<ErrorMessage errors={errors} name={name} />
					</div>
				)}
			</label>
		</div>
	);
};

export default CFormInput;
