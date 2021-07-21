import React from 'react';

class addOrEditEmployeeDetails extends React.Component {

	state = {
		payload: {
			empId: "",
			empName: "",
			empDesignation: "",
			emailId: "",
			gender: "",
			doj: "",
			salary: '',
		},
		empData: JSON.parse(localStorage.getItem('empData')) ? JSON.parse(localStorage.getItem('empData')) : []
	}

	inputChangeHandler = event => {
		let payload = this.state.payload;
		if (event.target.name === 'empDesignation' || event.target.name === 'gender') {
			payload[event.target.name] = event.target.value;
		}
		else {
			payload[event.target.id] = event.target.value;
		}
		this.setState({
			payload
		})
	}

	onSubmitHandler = () => {
		const empData = this.state.empData;
		if (this.props.match.params.id) {
			empData[this.props.match.params.id] = this.state.payload;
		}
		else {
			empData.push(this.state.payload);
		}
		localStorage.setItem('empData', JSON.stringify(empData))
		this.props.history.push('/dashboard')
	}

	componentWillMount() {
		if (!localStorage.getItem('loginDetails')) {
			this.props.history.push('/');
		}
	}

	componentDidMount() {
		if (this.props.match.params.id) {
			let id = this.props.match.params.id;
			let payload = JSON.parse(localStorage.getItem('empData')).find((val, index) => index == id);
			this.setState({
				payload
			})
		}
	}

	render() {
		return <div>
			<div className="outer">
				<div className="login-page">
					<h1>Add Or Edit Employee Details</h1>
					<form onSubmit={this.onSubmitHandler}>
						<div className="form-group">
							<label htmlFor="name">EmpID</label>
							<input type="text" onChange={this.inputChangeHandler} value={this.state.payload.empId} className="form-control" id="empId" aria-describedby="name" placeholder="Enter EmpId" required />
						</div>
						<div className="form-group">
							<label htmlFor="empName">EmpName</label>
							<input type="text" onChange={this.inputChangeHandler} value={this.state.payload.empName} className="form-control" id="empName" placeholder="Enter EmpName" required />
						</div>
						<div className="form-group">
							<label htmlFor="empDesignation">EmpDesignation</label>
							<div className="radio">
								<label className="radio-inline"><input type="radio" onChange={this.inputChangeHandler} checked={this.state.payload.empDesignation === 'IT/Sales'} value="IT/Sales" name="empDesignation" required />IT/Sales</label>
								<label className="radio-inline"><input type="radio" onChange={this.inputChangeHandler} checked={this.state.payload.empDesignation === 'Finance'} value="Finance" name="empDesignation" required />Finance</label>
								<label className="radio-inline"><input type="radio" onChange={this.inputChangeHandler} checked={this.state.payload.empDesignation === 'Business'} value="Business" name="empDesignation" required />Business</label>
								<label className="radio-inline"><input type="radio" onChange={this.inputChangeHandler} checked={this.state.payload.empDesignation === 'Management'} value="Management" name="empDesignation" required />Management</label>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="emailId">Email ID</label>
							<input type="email" onChange={this.inputChangeHandler} value={this.state.payload.emailId} className="form-control" id="emailId" placeholder="Enter Email Id" required />
						</div>
						<div className="form-group">
							<label htmlFor="empDesignation">Gender</label>
							<div className="radio">
								<label className="radio-inline"><input type="radio" onChange={this.inputChangeHandler} checked={this.state.payload.gender === 'Male'} value="Male" name="gender" required />Male</label>
								<label className="radio-inline"><input type="radio" onChange={this.inputChangeHandler} checked={this.state.payload.gender === 'Female'} value="Female" name="gender" required />Female</label>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="doj">DOJ</label>
							<input type="date" onChange={this.inputChangeHandler} value={this.state.payload.doj} className="form-control" id="doj" placeholder="Enter DOJ" required />
						</div>
						<div className="form-group">
							<label htmlFor="salary">Salary(in double)</label>
							<input type="number" onChange={this.inputChangeHandler} value={this.state.payload.salary} className="form-control" id="salary" placeholder="Enter Salary" required />
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
		</div>
	}
}

export default addOrEditEmployeeDetails;