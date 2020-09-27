import React from 'react';
import { useTable, usePagination } from "react-table";

export default class Table extends React.Component {
 
 constructor(props){
 super(props);
 this.getHeader = this.getHeader.bind(this);
 this.getRowsData = this.getRowsData.bind(this);
 this.getKeys = this.getKeys.bind(this);
 }
 
 getKeys = function(){
	if (this.props.data != null) {
		return Object.keys(this.props.data[0]);
	} else {
		return this.props.data;
	}
 }
 
 getHeader = function(){
 var keys = this.getKeys();
	if (this.props.data != null) {
		return keys.map((key, index)=>{
		return <th key={key}>{key.toUpperCase()}</th>
		})
	} else {
		return this.props.data;
	}
 }
 
 getRowsData = function(){
 var items = this.props.data;
 var keys = this.getKeys();
	if (this.props.data != null) {
		return items.map((row, index)=>{
		return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
		})
	} else {
		return this.props.data;
	}
 }
 
 render() {
 return (
 <div>
 <table>
 <thead>
 <tr>{this.getHeader()}</tr>
 </thead>
 <tbody>
 {this.getRowsData()}
 </tbody>
 </table>
 </div>
 
 );
 }

} 
const RenderRow = (props) =>{
 return props.keys.map((key, index)=>{
 return <td key={props.data[key]}>{props.data[key]}</td>
 })
}

