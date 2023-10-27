import React from "react";
// import MyProvider from "./Contextprovider";
import Test2 from "./components/test2";
import { Provider } from "react-redux";
import Store from "./redux/store";

function App() {

  return (
<Provider store={Store} >
  <Test2 />
</Provider>
// <MyProvider>
//   <Test />
//   </MyProvider>


  );
}

export default App;
