import React from 'react';
import { useSelector } from 'react-redux';

const Thunk = () => {
  const data = useSelector((state) => state.data);

  return (
    <div>
      <p>Is Loading: {data.isLoading.toString()}</p>
      {data.hasError ? <p>Error: {data.hasError}</p> : null}
      {data.data ? <p>Data: {data.data}</p> : null}
    </div>
  );
};

export default Thunk;
