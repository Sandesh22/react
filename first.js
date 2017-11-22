class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

class ShoopingList extends React.Component{
render(){
 return(
 		<div className="shopping-list">
    <h1> Shooping list for {this.props.name}</h1>
     <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
     </ul>   
   </div>
 )
}
}

ReactDOM.render(
  <ShoopingList name="sandesh"> </ShoopingList>,
 
  document.getElementById('container')
);
