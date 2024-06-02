import React from 'react'

export default class ClassCompo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: ""
        };
    }
    render() {
        return (
            <div>
                <form>
                    <label> Name </label>
                    <input type='text' onChange={(e) => { this.setState({ name: e.target.value }) }}></input>
                    <label> Age </label>
                    <input type='number' onChange={(e) => { this.setState({ age: e.target.value }) }}></input>
                    <input type='submit' value={'Submit'} onClick={(e) => {
                        e.preventDefault();
                        console.log("Name : " + this.state.name);
                        console.log("Age : " + this.state.age);
                    }}></input>
                </form>
            </div>
        )
    }
}
