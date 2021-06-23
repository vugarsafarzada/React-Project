import React, {Component} from 'react';
import {Input, Form, FormGroup, Label} from 'reactstrap';

class Register extends Component {
    state={
        fullname:"",
        email:"",
        city:""
    }

    dataHandler = (event) => {
        let getName = event.target.name;
        let getValue = event.target.value;
        this.setState({[getName]:getValue});
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className="register">
                <Form onSubmit={this.submitHandler} className="w-50 p-5 registerBox shadow-lg">
                    <FormGroup>
                        <Label for="fullname">Full name:</Label>
                        <Input type="text" name="fullname" id="fullname" placeholder="Name" onChange={this.dataHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input type="email" name="email" id="email" placeholder="Email address" onChange={this.dataHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City:</Label>
                        <Input type="select" name="city" id="city" placeholder="City" onChange={this.dataHandler}>
                            <option defaultValue="empty">City</option>
                            <option defaultValue="Baku">Baku</option>
                            <option defaultValue="Nakhchivan">Nakhchivan</option>
                            <option defaultValue="Gence">Gence</option>
                            <option defaultValue="Shusha">Shusha</option>
                        </Input>
                    </FormGroup>
                    <br/>
                    <Input type="submit" className="btn btn-primary d-block"/>
                    <br/>
                    <Input type="reset" className="btn btn-outline-danger d-block" defaultValue="Register"/>
                </Form>
            </div>
        );  
    }
}

export default Register;