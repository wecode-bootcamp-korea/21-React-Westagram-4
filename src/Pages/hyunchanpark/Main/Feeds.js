import React, { Component } from 'react';
import Feed from './Feed';
import './Main.scss';

class Feeds extends Component {
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

  render() {
    const { feedList } = this.state;
    return (
      <>
        <div className="feeds">
          {feedList.map((feed, i) => (
            <Feed
              key={feed.id}
              id={feed.id}
              userName={feed.userName}
              city={feed.city}
              userImgSrc={feed.userImgSrc}
              feedImgSrc={feed.feedImgSrc}
              feedLike={feed.feedLike}
              feedLikeCounts={feed.feedLikeCounts}
              contentText={feed.content}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Feeds;
