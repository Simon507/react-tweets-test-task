import DocumentTitle from 'react-document-title';

import TweetList from '../components/TweetList';

export default function Tweets() {
  return (
    <DocumentTitle title="Tweets Page">
      <TweetList />
    </DocumentTitle>
  );
}
