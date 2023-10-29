import React from "react";
// import MyProvider from "./Contextprovider";
// import Test2 from "./components/test2";
import { Provider } from "react-redux";
// import Store from "./redux/store";
// import  {myContext}  from "./context/context";
import store from "./thunk/store";
// import Test from "./components/test";
import Thunk from "./components/thunk";

function App() {

  return (

<>
<Provider store={store}>
<Thunk /> 
  </Provider>

  </>
  );
}

export default App;
