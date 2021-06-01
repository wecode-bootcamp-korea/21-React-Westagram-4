import React, { Component } from 'react';
import Feed from './Feed';
// import Comment from './Comment';
import './Main.scss';

class FeedList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedList: [],
      commentValue: '',
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     commentList: Comment,
  //   });
  // }

  // componentDidMount() {
  //   fetch('http://localhost:3000/data/commentData.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         commentList: data,
  //       });
  //     });
  // }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
      });
  }

  onCommentValue = e => {
    const { value, id } = e.target;
    // if()
    this.setState({ commentValue: e.target.value });
  };

  onSubmitCommentForm = e => {
    e.preventDefault();
    console.log('onSubmit');

    // const { commentList, commentValue } = this.state;
    // if (commentValue === '') return;

    // this.setState({
    //   commentList: [
    //     ...commentList,
    //     {
    //       id: commentList.length + 1,
    //       userName: 'hyunchan',
    //       content: commentValue.trim(),
    //       isLiked: false,
    //     },
    //   ],
    //   commentValue: '',
    // });
  };

  onRemoveComment = e => {
    console.log('onRemove');
    // const { commentList } = this.state;

    // this.setState({
    //   commentList: commentList.filter(
    //     comment => comment.id !== Number(e.target.id)
    //   ),
    // });
  };

  onToggleLike = e => {
    console.log('onToggle');
    // const { commentList } = this.state;
    // console.log(e.target.id);
    // this.setState({
    //   isLiked: !commentList[e.target.id].isLiked,
    // });
  };

  render() {
    const { feedList, commentValue } = this.state;

    const isCommentSubmitDisable =
      commentValue && commentValue.length > 0 ? false : true;

    console.log(commentValue);
    return (
      <>
        <div className="feeds">
          {feedList.map((feed, i) => (
            <Feed
              key={i}
              feed={feed}
              commentValue={commentValue}
              onCommentValue={this.onCommentValue}
              isCommentSubmitDisable={isCommentSubmitDisable}
              onSubmitCommentForm={this.onSubmitCommentForm}
              onRemoveComment={this.onRemoveComment}
              onToggleLike={this.onToggleLike}
            />
          ))}
        </div>
      </>
    );
  }
}

export default FeedList;
