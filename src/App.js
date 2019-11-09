import React, {Component} from 'react';
import {Button, message,Calendar} from 'antd'

class App extends Component {

show=()=>{
   // message.info('clicked')
    message.success('succeed');
}

    render() {
        function onPanelChange(value, mode) {
            console.log(value, mode);
        }
        return (
       <div>
           <Button type="primary" onClick={this.show}>Primary</Button>
           <Button>Default</Button>
           <Button type="dashed">Dashed</Button>
           <Button type="danger">Danger</Button>
           <Button type="link">Link</Button>


           <Calendar onPanelChange={onPanelChange} />
       </div>

        );
    }
}

export default App;