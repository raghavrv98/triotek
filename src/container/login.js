import React from 'react';
class Login extends React.Component {

	state = {
		payload: {
			name: "",
			password: ""
		}
	}

	inputChangeHandler = event => {
		let payload = this.state.payload;
		payload[event.target.id] = event.target.value
		this.setState({
			payload
		})
	}
	onSubmitHandler = () => {
		localStorage.setItem('loginDetails', JSON.stringify(this.state.payload))
		this.props.history.push('/dashboard')
	}

	render() {
		return <div>
			<div className="outer">
				<div className="login-page">
					<h1>Login Page</h1>
					<form onSubmit={this.onSubmitHandler}>
						<div className="form-group">
							<label for="name">Email address</label>
							<input type="text" onChange={this.inputChangeHandler} className="form-control" id="name" aria-describedby="name" placeholder="Enter name" />
						</div>
						<div className="form-group">
							<label for="password">Password</label>
							<input type="password" onChange={this.inputChangeHandler} className="form-control" id="password" placeholder="Password" />
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
		</div>
	}
}

export default Login;