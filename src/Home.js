import React from "react";

 function Home(){
    return(
        <div className="home-container">
            <h1>Welcome to Home Page</h1>
            <h3>Topics to be Covered</h3>
            <table className="table-content">
        <tr>
            <th>Sr No.</th>
            <th>Topics</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Module-1: Web Programming Fundamentals</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Module 2: JavaScript</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Module 3: React Fundamentals</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Module 4: Advance React</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Module 5: Node.js</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Module 6: Express</td>
        </tr>
        </table>    
        </div>
    );
 };

 export default Home;