import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Navbar(){
	return (
	<div>
		<nav className="navbar">
	      <ul className="nav-links">
	        <li>
	          <a href="/" className="nav-link active">
	            STUDENT FEED
	          </a>
	        </li>
	        
	        <li>
	          <a href="/" className="nav-link">
	            home
	          </a>
	        </li>
	        <li>
	          <a href="/" className="nav-link">
	            about
	          </a>
	        </li>
	        <li>
	          <a href="/" className="nav-link">
	            contact
	          </a>
	        </li>
	      </ul>
	    </nav><br/><br/><br/><br/>
	   <center><table class="w3-table  w3-striped w3-bordered">
	   	<caption>Student Feedback</caption>
	      <tr><th>Subject</th><th>Puntuality</th><th>Teaching</th><th>Knowledge</th><th>Explaination</th></tr>
	      <tr>
	      	<td>Subject1</td>
	      	<td><input type='radio'value='1'/><input type='radio'value='2'/><input type='radio'value='3'/><input type='radio'value='4'/><input type='radio' value='5'/></td>
	      	<td><input type='radio'value='1'/><input type='radio'value='2'/><input type='radio'value='3'/><input type='radio'value='4'/><input type='radio' value='5'/></td>
	      	<td><input type='radio'value='1'/><input type='radio'value='2'/><input type='radio'value='3'/><input type='radio'value='4'/><input type='radio' value='5'/></td>
	      	<td><input type='radio'value='1'/><input type='radio'value='2'/><input type='radio'value='3'/><input type='radio'value='4'/><input type='radio' value='5'/></td>
	      </tr>
	      <tr>
	      	<td>Subject2</td>
	      	<td><input type='radio'value='1'/><input type='radio'value='2'/><input type='radio'value='3'/><input type='radio'value='4'/><input type='radio' value='5'/></td>
	      	<td><input type='radio'value='1'/><input type='radio'value='2'/><input type='radio'value='3'/><input type='radio'value='4'/><input type='radio' value='5'/></td>
	      	<td><input type='radio'value='1'/><input type='radio'value='2'/><input type='radio'value='3'/><input type='radio'value='4'/><input type='radio' value='5'/></td>
	      	<td><input type='radio'value='1'/><input type='radio'value='2'/><input type='radio'value='3'/><input type='radio'value='4'/><input type='radio' value='5'/></td>
	      </tr>
	      <tr>
	      	<td>Subject3</td>
	      	<td><input type='radio'value='1'/><input type='radio'value='2'/><input type='radio'value='3'/><input type='radio'value='4'/><input type='radio' value='5'/></td>
	      	<td><input type='radio'value='1'/><input type='radio'value='2'/><input type='radio'value='3'/><input type='radio'value='4'/><input type='radio' value='5'/></td>
				<td><input type='radio'value='1'/><input type='radio'value='2'/><input type='radio'value='3'/><input type='radio'value='4'/><input type='radio' value='5'/></td>
	      	<td><input type='radio'value='1'/><input type='radio'value='2'/><input type='radio'value='3'/><input type='radio'value='4'/><input type='radio' value='5'/></td>
	      </tr>
	      <tr>
	      	<td>Subject4</td>
	      	<td><input type='radio'value='1'/><input type='radio'value='2'/><input type='radio'value='3'/><input type='radio'value='4'/><input type='radio' value='5'/></td>
	      	<td><input type='radio'value='1'/><input type='radio'value='2'/><input type='radio'value='3'/><input type='radio'value='4'/><input type='radio' value='5'/></td>
				<td><input type='radio'value='1'/><input type='radio'value='2'/><input type='radio'value='3'/><input type='radio'value='4'/><input type='radio' value='5'/></td>      
	      	<td><input type='radio'value='1'/><input type='radio'value='2'/><input type='radio'value='3'/><input type='radio'value='4'/><input type='radio' value='5'/></td>
	      </tr>
	   	<br/>   
	   </table></center>	
	</div>
	);
}

//function StudentFeed(){
//	
//	return (
//	<React.Fragment>
//		<Navbar/>
//		<Table/>
//	<React.Fragment/>	
//	);
//}

//function table(){
//	return(
//	    <table>
//        <thead>Student Feedback</thead>
//        <th><td>Puntuality</td><td>Teaching</td><td>Knowledge</td><td>Explaination</td></th>
//        <tr><td><input type='text'/>Subject1</td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td></tr>
//        <tr><td><input type='text'/>Subject2</td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td></tr>
//        <tr><td><input type='text'/>Subject3</td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td></tr>
//        <tr><td><input type='text'/>Subject4</td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td></tr>
//	    </table>	
//	);
//}

ReactDOM.render(
	<Navbar /> , 
	document.getElementById("root")
	);
	
