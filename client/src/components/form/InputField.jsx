import "./InputField.scss";

import PropTypes from "prop-types";
import React from "react";

InputField.propTypes = {
	form: PropTypes.object.isRequired,
	field: PropTypes.object.isRequired,

	type: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
};

InputField.defaultProps = {
	type: "text",
};

function InputField({form, field, type, label, placeholder}) {
	return (
		<div className="input-field">
			<label>{label}</label>
			{type == "textarea" ? (
				<textarea
					className="input-field__input"
					name={field.name}
					onChange={field.onChange}
					onBlur={field.onBlur}
					value={field.value}
					placeholder={placeholder}
					rows="10"
					style={{width: "100%"}}
				/>
			) : (
				<input
					className="input-field__input"
					name={field.name}
					onChange={field.onChange}
					onBlur={field.onBlur}
					value={field.value}
					placeholder={placeholder}
				/>
			)}
			{form.touched[field.name] && form.errors[field.name] && (
				<div className="input-field__error">{form.errors[field.name]}</div>
			)}
		</div>
	);
}

export default InputField;
