//RecipeField contains logic to render
// a single label and text input
import React from 'react';
export default ({ input, label, meta: { error, touched } }) => {
	// console.log(input);
	// console.log(meta);
	return (
		<div>
			<label>{label}</label>
			{/* <input onBlur={input.onBlur} onChange={input.onChange} /> */}
			<input {...input} style={{ marginBottom: '5px' }} />
			{/* {meta.error} */}
			<div className="red-text" style={{ marginBottom: '20px' }}>
				{touched && error}
			</div>
		</div>
	);
};
