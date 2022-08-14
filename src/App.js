import React, { Component } from 'react';
import CardContainer from './component/CardContainer' ;
import 'antd/dist/antd.css'
import './App.css';


class App extends Component {
  constructor(props){
    super (props) 
    this.state=({
      loading:true
    })
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({loading:false})
    },2000)
  }
  render() {
  return (
    <div className="App">
     <CardContainer loading={this.state.loading}/>
     
    </div>
  );
}
}
export default App;