//#region Import
import { ReactNode } from 'react';
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
	name: Path<T>;
	control: Control<T>;
	errors: FieldErrors<FieldValues>;

	rows?: number;
	suffixIcon?: ReactNode;
	autoComplete?: string;
	label?: string;
	defaultValue?: PathValue<T, Path<T>>;
	placeholder?: string;
	prefixIcon?: ReactNode;
	rules?: FieldValues;
};

export const CTextArea = <T extends FieldValues>({
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
	rows = 3,
}: Props<T>) => {
	return (
		<div className="form-item form-item-textarea">
			<label id={name} htmlFor={name}>
				<span className="form-item-label">{label}</span>
				<Controller
					control={control}
					name={name}
					defaultValue={defaultValue}
					rules={rules}
					render={({ field }) => (
						<div
							className={classNames('textarea', {
								'has-error': !!errors[name],
							})}
						>
							{prefixIcon && <span className="input-prefix">{prefixIcon}</span>}

							<textarea
								{...field}
								rows={rows}
								placeholder={placeholder}
								autoComplete={autoComplete}
							/>

							{suffixIcon && <span className="input-suffix">{suffixIcon}</span>}
						</div>
					)}
				/>

				{errors[name] && (
					<div className="error-message">
						<ErrorMessage errors={errors} name={name} />
					</div>
				)}
			</label>
		</div>
	);
};

export default CTextArea;
