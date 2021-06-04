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

    if (!newComment) return;

    const { feedList } = this.state;

    const updatedFeedList = feedList.map(feed =>
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
      feedList: updatedFeedList,
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
    const { commentid } = e.target.dataset;
    console.log(e);
    // const nextState = feedList.map(feed =>
    //   feed.id === feedId
    //     ? {
    //         ...feed,
    //         comments: feed.comments.map(comment => {
    //           if (comment.id === Number(commentid)) {
    //             if (comment.Likers.includes('hyunchan')) {
    //               comment.Likers = comment.Likers.filter(
    //                 liker => liker !== 'hyunchan'
    //               );
    //             } else {
    //               comment.Likers.push('hyunchan');
    //             }
    //           }
    //           return comment;
    //         }),
    //       }
    //     : feed
    // );

    //이부분을 이렇게 고쳐야 정상 작동 된다. 안됐던 이유는 115 line comment.Likers.includes('hyunchan')의 리턴값이 comment.Likers로 comment 값을 덮어씌었기 때문에 해당 커멘트의 내용이 삭제되었던 거다.

    //수정본에서는 comment.Likers.includes('hyunchan') ? 의 리턴값으로 { ...comment , 수정된 Likers} 형태의 새로운 comment를 주기때문에 정상 작동된다.
    const updatedToggleHeart = feedList.map(feed =>
      feed.id === feedId
        ? {
            ...feed,
            comments: feed.comments.map(comment =>
              comment.id === Number(commentid)
                ? comment.Likers.includes('hyunchan')
                  ? {
                      ...comment,
                      Likers: comment.Likers.filter(
                        liker => liker !== 'hyunchan'
                      ),
                    }
                  : { ...comment, Likers: comment.Likers.concat('hyunchan') }
                : comment
            ),
          }
        : feed
    );

    this.setState({
      feedList: updatedToggleHeart,
    });

    // TODO: 주석 및 console.log 삭제전 커밋 한번하고 삭제 후 다시 커밋한 후 push
    console.log('toggleLike after', updatedToggleHeart);
  };

  render() {
    const { feedList, inputValue } = this.state;

    console.log('feedList', feedList);
    return (
      <>
        <div className="feeds">
          {feedList.map(feed => (
            <Feed
              key={feed.id}
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
