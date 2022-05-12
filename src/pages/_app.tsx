import { Provider } from "react-redux";

import { store } from "@store/index";

import "@assets/styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
