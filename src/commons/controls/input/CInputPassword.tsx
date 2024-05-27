//#region Import
import { ReactNode, useState } from 'react';
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

import { VisibilityOnIcon } from '@commons/icons';
import { VisibilityOffIcon } from '@commons/icons/VisibilityOffIcon';

import './index.scss';
//#endregion

type Props<T extends FieldValues> = {
	name: Path<T>;
	control: Control<T>;
	errors: FieldErrors<FieldValues>;

	label?: string;
	defaultValue?: PathValue<T, Path<T>>;
	placeholder?: string;
	prefixIcon?: ReactNode;
	rules?: FieldValues;
};

export const CInputPassword = <T extends FieldValues>({
	control,
	name,
	defaultValue,
	placeholder,
	rules,
	prefixIcon,
	label,
	errors,
}: Props<T>) => {
	const [isRevealPassword, setIsRevealPassword] = useState<boolean>(false);

	const togglePassword = () => setIsRevealPassword((prevState) => !prevState);

	return (
		<Controller
			control={control}
			name={name}
			defaultValue={defaultValue}
			rules={rules}
			render={({ field }) => (
				<div>
					<div
						className={classNames('input', {
							'has-error': !!Object.values(errors).length,
						})}
					>
						{prefixIcon && <span className="input-prefix">{prefixIcon}</span>}

						<label htmlFor={name} className="input-label">
							{label}

							<input
								{...field}
								placeholder={placeholder}
								type={isRevealPassword ? 'text' : 'password'}
								autoComplete="current-password"
							/>
						</label>

						<span
							className="input-suffix cursor-pointer"
							onClick={togglePassword}
						>
							{isRevealPassword ? <VisibilityOnIcon /> : <VisibilityOffIcon />}
						</span>
					</div>

					<div className="error-message">
						<ErrorMessage errors={errors} name={name} />
					</div>
				</div>
			)}
		/>
	);
};

export default CInputPassword;
