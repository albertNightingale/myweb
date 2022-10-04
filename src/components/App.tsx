import React from 'react';

import Header from './Header';

function App( props: any) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default App;
