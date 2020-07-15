import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/api/customers',{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
         body: JSON.stringify({
          id:4,
          name:'Wissam',
          surnname:'Darwish'
        })
      })
      fetch('/api/customers/1', {
  method: 'PUT',
  mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
  body: JSON.stringify({
    id:1,
    name:'RORO',
    surnname:'MOMO'
  })
}) 
fetch('/api/customers/1', {
  method: 'DELETE',
  mode: 'cors', 
  cache: 'no-cache', 
  credentials: 'same-origin',  
})
    .then(res => res.json())
    .then(customers => this.setState({customers})) 
    .catch((error) => {
      console.error('Error:', error);
    })
  
}

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
        {this.state.customers.map(customer => 
          <li key={customer.id}>{customer.name} {customer.surnname}</li>
        )}
        {console.log('STATE ',this.state.customers)}         
        </ul>
      </div>
    );
  }
}

export default Customers;
