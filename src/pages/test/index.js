import React, {Component} from 'react';
import {getData} from "../../utils/request";

class Test extends Component {

    getStudents = () => {
        getData('http://localhost:3000/api1/students')
    };

    getCars = () => {
        getData('http://localhost:3000/api2/cars')
    };

    render() {
        return (
            <div>
                <button onClick={this.getStudents}>获取学生</button>
                <button onClick={this.getCars}>获取汽车</button>
            </div>
        );
    }
}

export default Test;
