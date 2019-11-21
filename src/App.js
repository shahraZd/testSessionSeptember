import React, {Component} from 'react';
import Contacts from './components/contacts';
import './App.css';

class App extends Component {
    render() {
        return (
            <Contacts contacts={this.state.contacts} />
        )
    }

    state = {
        contacts: []
    };

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    //         .then(res => res.json())
    //         .then((data) => {
    //             this.setState({ contacts: data })
    //         })
    //         .catch(console.log)
    // }
}

export default App;
