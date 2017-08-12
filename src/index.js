import React from 'react';
import ReactDOM from 'react-dom';
import './modules/bootstrap/bootstrap';

const getGreeting = (user) => {
    if (user) {
        return "Hello " + user;
    }
    return "Hello World";
};

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {name: 'Athagoras'};
    }

    handleChange(e) {
        this.setState({name: e.target.value});
    }

    render() {
        return (
            <main>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-3">{ getGreeting(this.state.name) }!</h1>
                        <p className="lead">Nice to meet you.</p>
                        <hr className="my-4" />
                        <p>You can change your name which you prefer in the text box below.</p>
                        <form className="lead">
                            <div className="form-group">
                                <label>Name: </label>
                                <input type="text" className="form-control" onChange={this.handleChange} defaultValue={this.state.name} />
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        );
    }
}

ReactDOM.render(<Welcome/>, document.getElementById('app'));
