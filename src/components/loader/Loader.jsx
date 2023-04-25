import { Circles } from 'react-loader-spinner';

import { LoaderBox } from './Loader.styles';

function Loader() {
  return (
    <LoaderBox>
      <Circles
        height="150"
        width="150"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <p>loading...</p>
    </LoaderBox>
  );
}

export default Loader;
