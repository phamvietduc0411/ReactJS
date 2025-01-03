function formatDay(date) {
  return new Date(date).toTimeString()
}

function Avatar(props) {
  return <img src={props.user.avatar} alt={props.user.name} />
}

function UserName(props) {
  return <div className='userName'>{props.userName.name}</div>
}

const CommentText = (props) => {
  return <div className='comment-text'>{props.text}</div>
}

function Comment(props) {
  return (
    <div className='comment'>
      <div className='userInfo'>
        <Avatar user={props.author} />
        <UserName userName={props.author} />
        <CommentText text={props.text} />
        <div className='comment-day'>{formatDay(props.date)}</div>
      </div>
    </div>
  )
}

export default Comment
