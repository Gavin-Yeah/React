import React, {Component} from 'react';
import uuid from 'uuid'
class Add extends Component {

    contentRef = React.createRef();
    add = () =>{
        //1.get the input
        let userName = this.userName.value.trim();
        let content = this.contentRef.current.value.trim();
        //2. check the validity of the input
        if(userName===''||content===''){
            alert("content required")
        }

        //3. construct a comment obj
        let obj = {userId:uuid(),userName, content}
        //4. put data into the state of App
        let {addComment} = this.props
        addComment(obj)
        //5.empty the input
        this.userName.value ='';
        this.contentRef.current.value = '';
    }
    render() {

        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" ref={(input)=>{this.userName=input}}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" ref={this.contentRef}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Add;