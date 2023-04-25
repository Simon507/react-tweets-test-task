import { Provider } from 'react-redux';
import { store } from '../redux/store';

import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Tweets from '../pages/Tweets';
import Layout from './layout/Layout';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/react-tweets-test-task" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/react-tweets-test-task/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
