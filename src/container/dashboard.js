import React from 'react';

class Dashboard extends React.Component {

	state = {
		empData: JSON.parse(localStorage.getItem('empData')) ? JSON.parse(localStorage.getItem('empData')) : []
	}

	componentDidMount() {
		if (!localStorage.getItem('loginDetails')) {
			this.props.history.push('/');
		}
	}

	logoutHandler = () => {
		localStorage.clear();
		this.props.history.push('/login')
	}

	deleteHandler = (index) => {
		let isDeleted = window.confirm("Are you sure you want to delete?");
		let empData = this.state.empData;
		empData.splice(index, 1)
		if (isDeleted) {
			this.setState({
				empData
			}, () => {
				localStorage.setItem('empData', JSON.stringify(empData));
			})
		}

	}

	render() {
		return <div>
			<div className="outer">
				<h1 className="text-center">Employee List</h1>
				<button onClick={this.logoutHandler} type="button" className="btn btn-secondary logout">Logut</button>
				<button onClick={() => this.props.history.push('/addOrEditEmployeeDetails')} type="button" className="btn btn-success add">Add Employee</button>
				<div className="employee-list-table">
					<table className="table table-hover">
						<thead>
							<tr>
								<th scope="col">EmpID</th>
								<th scope="col">EmpName</th>
								<th scope="col">EmpDesignation</th>
								<th scope="col">EmailID</th>
								<th scope="col">Gender</th>
								<th scope="col">DOJ(in DD/MM/YYYY)</th>
								<th scope="col">Salary(in double)</th>
								<th scope="col">Action</th>
							</tr>
						</thead>
						<tbody>
							{this.state.empData.length > 0 ?
								<React.Fragment>
									{this.state.empData.map((val, index) => {
										return <tr key={index}>
											<td>{val.empId}</td>
											<td>{val.empName}</td>
											<td>{val.empDesignation}</td>
											<td>{val.emailId}</td>
											<td>{val.gender}</td>
											<td>{val.doj}</td>
											<td>{val.salary}</td>
											<td><span className="edit-icon" onClick={() => this.props.history.push(`addOrEditEmployeeDetails/${index}`)}><i className="fa fa-pencil" aria-hidden="true"></i></span>
												<span className="delete-icon" onClick={() => this.deleteHandler(index)}><i className="fa fa-trash" aria-hidden="true"></i></span>
											</td>
										</tr>
									})
									}
								</React.Fragment>
								: <h4> No Employees Found</h4>
							}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	}
}

export default Dashboard;