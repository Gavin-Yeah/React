import React, {Component} from 'react';
import './Item.css'
class Item extends Component {

    delete = (userId)=> {
        //1 1st way to get id
        // let {userId} = this.props;
        // 2nd way to get id :parameter

        //2. delete data
        let {deleteComment, userName} = this.props;
        if(window.confirm(`sure to delete ${userName}'s comment?`))
            deleteComment(userId)
    }
    render() {
        let {userName, content, userId} = this.props;
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="#1" onClick={()=>{ return this.delete(userId)}}>删除</a>
                </div>
                <p className="user"><span>{userName}</span><span>说:</span></p>
                <p className="centence">{content}</p>
            </li>

        );
    }
}

export default Item;