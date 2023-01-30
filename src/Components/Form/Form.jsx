import { useForm } from 'react-hook-form';
import './form.scss';

export default function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="form-element">
				<input
					type="text"
					placeholder="Name"
					data-lpignore="true"
					{...register('name', { required: true })}
				/>
				{errors.name && <span className="error-message">Name is required</span>}
			</div>
			<div className="form-element">
				<input
					type="email"
					placeholder="Email"
					data-lpignore="true"
					{...register('email', { required: true })}
				/>
				{errors.email && (
					<span className="error-message">Sorry, invalid format here</span>
				)}
			</div>
			<div className="form-element">
				<textarea
					placeholder="Message"
					data-lpignore="true"
					{...register('message', { required: true })}></textarea>
				{errors.message && (
					<span className="error-message">This field is required</span>
				)}
			</div>
			<button className="underline-hover">Send Message</button>
		</form>
	);
}
