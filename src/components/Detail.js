import React from "react";

class Detail extends React.Component{
  componentDidMount(){
    const { location , history} = this.props;
    if (location.state === undefined){
      history.push("/")
    }
    console.log(location.state)
  }
  render(){
    const {location} = this.props;
    if (location.state) {
    return <div>
      <h1>{location.state.title}</h1>
      <img src={location.state.poster} alt={location.state.title}></img>
      <h4>{location.state.year}</h4>
      <p>{location.state.summary}</p>

      </div>
  }
  else{
    return null;
  }
  }
}
export default Detail




