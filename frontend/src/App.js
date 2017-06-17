import React, {Component} from "react";
// import logo from "./logo.svg";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import Client from "./components/Client";
import Header from "./components/Header";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {employees: []};
    }

    componentDidMount() {
        Client({method: 'GET', path: '/api/employees'}).then(response => {
            this.setState({employees: response.entity._embedded.employees});
        });
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <div>
                    <EmployeeList employees={this.state.employees}/>
                </div>
            </div>
        )
    }
}

export default App;
