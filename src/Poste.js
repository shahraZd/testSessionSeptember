import React , {Component} from 'react';



class Poste extends Component {
  constructor(props) {
    super(props);
   this.state= {
   

      items:[],
      isLoaded:false
    }
  }
    componentDidMount() {
        const {id} = this.props.match.params;
       

        
     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(res=>res.json())
      .then(json=>{
        this.setState({
          isLoaded:true,
          items:json,
        })
      });
    }

  
render() {
    var {isLoaded , items} = this.state ;
console.log({isLoaded , items})

    return( <div>
       {!isLoaded ? <div>Loading ...</div> 
    :
    <div className="Poste">
      <ul>
        {items.map (item=>
        <li key={item.id}>
         Poste :{item.title}
         
        </li>)}
      </ul>
    </div>
    } 
    </div>
  )

}
}

export default Poste;
