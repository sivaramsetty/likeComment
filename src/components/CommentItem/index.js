// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

console.log(formatDistanceToNow(new Date()))

const CommentItem = props => {
  const {commentItem, deleteList, likedComment, classname} = props
  const {isFavourite, userComment, userName, id} = commentItem

  const likedTrigger = () => {
    // console.log(id)
    likedComment(id)
  }
  const deletetoggle = () => {
    // console.log(id)
    deleteList(id)
  }

  return (
    <div className="commentItemCon">
      <div className="nameTime">
        <p style={{marginRight: '20px'}}>{userName}</p>
        <p>{formatDistanceToNow(new Date())}</p>
      </div>

      <p>{userComment}</p>
      <div className="likedImgCon">
        {isFavourite ? (
          <div className="imgPara">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
              alt="liked"
              className="likedImg"
              style={{marginRight: '20px'}}
            />
            <button
              type="button"
              onClick={likedTrigger}
              className={(classname[1], 'btn')}
            >
              Liked
            </button>
          </div>
        ) : (
          <div className="imgPara">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
              className="likedImg"
              style={{marginRight: '20px'}}
            />
            <button
              type="button"
              onClick={likedTrigger}
              className={(classname[1], 'btn')}
            >
              Like
            </button>
          </div>
        )}
        <button
          data-testid="delete"
          onClick={deletetoggle}
          type="button"
          className="btn"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="likedImg"
          />
        </button>
      </div>
    </div>
  )
}

export default CommentItem
