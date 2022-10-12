import React from "react";

import Header from "./components/Header";

function App(props: any) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default App;
