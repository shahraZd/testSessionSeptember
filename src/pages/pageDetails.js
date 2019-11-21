import React, { Component } from 'react';
import Details from '../component/details'
class PageDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            description:[]
        }
    }
    componentDidMount() {
        fetch(` https://jsonplaceholder.typicode.com/comments?postId/${this.props.match.params.id}`)
       
          .then(res => res.json())
          .then(data => {
            this.setState({ description: data });
          })
          .catch(console.log);
      }
    render() { 
        console.log(this.state)
        return ( <div> 
    <p>{this.state.body}</p>
        </div> );
    }
}
 
export default PageDetails;