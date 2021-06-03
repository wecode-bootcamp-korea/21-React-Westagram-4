import React, { Component } from 'react';
import Feed from './Feed';

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
          }
        : feed
    );

    this.setState({
      feedList: nextState,
    });
  };

  onRemoveComment = (e, feedId) => {
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
