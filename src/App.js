import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./store";

import Users from "./Users";
import User from "./User";

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userid" element={<User />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
