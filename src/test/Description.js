import React,{useEffect}from 'react'
import { connect } from 'react-redux';
import {getDescription} from './Actions'
 const Description=(props)=> {
    useEffect(() => {
        props.getDescription();
      }, []);
    return (
        <div>
            {props.desc.map((el, i) => (
        <div className="user" key={i}>
          <p>{el.userId}</p>
          <p>{el.id}</p>
          <p>{el.title}</p>
          <p>{el.body}</p>
          
        </div>
      ))}
        </div>
    )
}

const mapStateToProps = state => ({ ...state });
export default connect(mapStateToProps,{getDescription}) (Description)