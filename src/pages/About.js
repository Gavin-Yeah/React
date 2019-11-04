import React, {Component} from 'react';

class About extends Component {
    componentWillUnmount() {
        console.log("about componentwillunmount")
    }
    componentDidMount() {
        console.log("about didmount")
    }

    render() {
        console.log("about render")
        return (
            <div>
               <h3>我是about的内容</h3>
            </div>
        );
    }
}

export default About;