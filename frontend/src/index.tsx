/**@jsx jsx */
import React, { Suspense } from "react";
import ReactDom from "react-dom";
import { jsx, css } from "@emotion/react";
import { HeaderWithRouter as Header } from "./components/header";
import HomePage from "./components/HomePage";
import { fontFamily, fontSize, gray2 } from "./components/Styles/Styles";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { AskSignInPage } from "./components/Routing/AskSignInPage";
import { SearchPage } from "./components/Routing/SearchPage";
import { SignInPage } from "./components/Routing/SignInPage";
import { NotFoundPage } from "./components/Routing/NotFoundPage";
import { QuestionPage } from "./components/Routing/QuestionPage";
import { Provider } from "react-redux";
import { configureStore } from "./redux-files/Store";

// const AskSignInPage = lazy(() => import('./components/Routing/AskSignInPage'));
const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div
          css={css`
            font-family: ${fontFamily};
            font-size: ${fontSize};
            color: ${gray2};
          `}
        >
          <Header />
          <Switch>
            <Redirect from="/home" to="/" />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/search" component={SearchPage} />
            <Route path="/ask" component={AskSignInPage} />
            <Suspense
              fallback={
                <div
                  css={css`
                    margin-top: 100px;
                    text-align: center;
                  `}
                >
                  Loading...
                </div>
              }
            ></Suspense>
            <Route exact path="/signin" component={SignInPage} />
            <Route path="/questions/:questionId" component={QuestionPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

const root = document.getElementById("app-root");
ReactDom.render(<App />, root);
