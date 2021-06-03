import React, { Component } from 'react';
import Feed from './Feed';
// import Comment from './Comment';
import './Main.scss';

class FeedList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedList: [],
    };
  }

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

  onSubmitCommentForm = (e, feedId, newComment) => {
    e.preventDefault();

    if (newComment === '') return;

    const { feedList } = this.state;

    const nextState = feedList.map(feed =>
      feed.id === feedId
        ? {
            ...feed,
            comments: [
              ...feed.comments,
              {
                id: feed.comments.length + 1,
                userName: 'hyunchan',
                content: newComment.trim(),
                Likers: [],
              },
            ],
            // comments: feed.comments.concat({
            //   id: feed.comments.length + 1,
            //   userName: 'hyunchan',
            //   content: newComment.trim(),
            //   Likers: [],
            // }),
          }
        : feed
    );
    // console.log('<<<<<<<<<<<<<<<<<<<<<<', feedId, nextState);
    this.setState({
      feedList: nextState,
    });
  };

  onRemoveComment = (e, feedId) => {
    console.log('onRemove e', e);
    // e.target.id = 클릭된 댓글의 번호
    const { feedList } = this.state;
    const { id } = e.target;
    const nextState = feedList.map(feed =>
      feed.id === feedId
        ? {
            ...feed,
            comments: feed.comments.filter(
              comment => comment.id !== Number(id)
            ),
          }
        : feed
    );
    console.log('new', nextState);
    this.setState({
      feedList: nextState,
    });
  };

  onToggleLike = (e, feedId) => {
    const { feedList } = this.state;
    const { id } = e.target;
    console.log('like id', id);

    const nextState = feedList.map(feed =>
      feed.id === feedId
        ? {
            ...feed,
            comments: feed.comments.map(comment => {
              if (comment.id === Number(id)) {
                if (comment.Likers.includes('hyunchan')) {
                  comment.Likers = comment.Likers.filter(
                    liker => liker !== 'hyunchan'
                  );
                } else {
                  comment.Likers.push('hyunchan');
                }
              }
              return comment;
            }),
          }
        : feed
    );

    //TODO: 삼항 연산자가 안되는 이유 바로 return값을 주기때문에 push랑 이것저것이 안먹히는거같다.
    // const nextState = feedList.map(feed =>
    //   feed.id === feedId
    //     ? {
    //         ...feed,
    //         comments: feed.comments.map(comment =>
    //           comment.id === Number(id)
    //             ? comment.Likers.includes('hyunchan')
    //               ? (comment.Likers = comment.Likers.filter(
    //                   liker => liker !== 'hyunchan'
    //                 ))
    //               : comment.Likers.push('hyunchan')
    //             : comment
    //         ),
    //       }
    //     : feed
    // );

    this.setState({
      feedList: nextState,
    });

    console.log('toggleLike after', nextState);
  };

  render() {
    const { feedList, inputValue } = this.state;

    console.log('feedList', feedList);
    return (
      <>
        <div className="feeds">
          {feedList.map((feed, i) => (
            <Feed
              key={i}
              feed={feed}
              inputValue={inputValue}
              onInputComment={this.onInputComment}
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
