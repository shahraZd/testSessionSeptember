// import React, { Component } from "react";
// class Details extends Component {
//   state = {
//     champId: this.props.match.params.id,
//     post: []
//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/posts?id='  this.state.champId + "")
//       .then(res => res.json())
//       .then((data) => {
//         this.setState({ post: data })
//       })
//       .catch(console.log)
//   }
//   render() {
//     return (
//       <div>
//         bonjour
//          {this.state.post.map(e => {
//           return( <div>
//              <h1>{e.title}</h1>
//              <span>{e.body}</span>
//            </div>)
//          })}
//         {/* { this.state.post.filter(el=>el.id===this.state.champId).map(el=>(
//        ))} */}
//       </div>
//     )
//   }
// }
// export default Details