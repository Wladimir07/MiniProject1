import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './table.js';

const apikey = '&apikey=db054198';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:null,
	  naziv: '',
	  godina: '',
	  žanr: ''
    };
  }
  fetchData = (event) => {
	event.preventDefault();
	const naziv = this.state.naziv;
	const godina = this.state.godina;
	const url = `http://www.omdbapi.com/?s=${naziv}&y=${godina}${apikey}`;
	fetch(url)
       .then(response => response.json())
	   .then(result => {
		   console.log(result);
		   return result;
	   })
       .then(result => {
		   this.setState({ data: result.Search });
		   console.log(this.state);
	   });
	   
  }
  
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Projekat 1 </h1>
	  <h2>Ovo je Single Page aplikacija za pretragu filmova.</h2>
      <p>Unesite naziv filma:</p>
      <input
        type='text'
        name='naziv'
        onChange={this.myChangeHandler}
      />
      <p>Unesite godinu izlaska filma:</p>
      <input
        type='text'
        name='godina'
        onChange={this.myChangeHandler}
      />
	  <p>Izaberite žanr filma:</p>
      <select value={this.state.zanr}>
        <option value="action">akcija</option>
        <option value="comedy">komedija</option>
        <option value="horror">horor</option>
		<option value="thriller">triler</option>
		<option value="drama">drama</option>
		<option value="fantasy">fantazija</option>
      </select>
	  <p>Unesite glumce filma:</p>
      <input
        type='text'
        name='glumci'
        onChange={this.myChangeHandler}
      />
	  <p>Unesite opis sadržaja filma:</p>
      <textarea
        type='text'
        name='opis'
        onChange={this.myChangeHandler}
      />
	  <br/>
	  <button onClick={this.fetchData}>Submit</button>
	  <br/> Pronađeni podaci:
	  <Table data={this.state.data}/>
      </form>
	  
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
