import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
const initialList = []
class Comments extends Component {
  state = {name: '', comment: '', newList: initialList}

  nameHandler = event => {
    //  console.log(event.target.value)
    this.setState({name: event.target.value})
  }

  commentHandler = event => {
    //  console.log(event.target.value)
    this.setState({comment: event.target.value})
  }

  triggerButton = event => {
    const {name, comment} = this.state
    event.preventDefault()
    const nameComment = {
      id: uuidv4(),
      userName: name,
      userComment: comment,
      isFavourite: false,
    }
    if (name !== '' && comment !== '') {
      this.setState(prevState => ({
        newList: [...prevState.newList, nameComment],
        name: '',
        comment: '',
      }))
    }
  }

  deleteList = id => {
    this.setState(prevState => ({
      newList: prevState.newList.filter(each => each.id !== id),
    }))
  }

  likedComment = id => {
    // console.log(id)
    this.setState(prevState => ({
      newList: prevState.newList.map(like =>
        like.id === id ? {...like, isFavourite: !like.isFavourite} : like,
      ),
    }))
  }

  render() {
    const {name, comment, newList} = this.state
    console.log(newList)
    return (
      <div className="con">
        <div className="subCon">
          <div className="nameComment">
            <h1 className="">Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <form onSubmit={this.triggerButton}>
              <input
                type="text"
                onChange={this.nameHandler}
                value={name}
                placeholder="Your Name"
                style={{width: '400px', marginBottom: '20px'}}
              />
              <br />
              <textarea
                cols="60"
                rows="7"
                placeholder="Your Comment"
                onChange={this.commentHandler}
                value={comment}
              />
              <div>
                <button type="submit">Add Comment</button>
              </div>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
              className="logo"
            />
          </div>
        </div>
        <div className="itemCon">
          <p>{newList.length} Comments</p>
          <ul>
            {newList.map(each => (
              <li key={each.id}>
                <CommentItem
                  commentItem={each}
                  likedComment={this.likedComment}
                  deleteList={this.deleteList}
                  classname={initialContainerBackgroundClassNames}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
