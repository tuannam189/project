import React from "react";
import {  Route, Switch, useRouteMatch } from "react-router-dom";
import AddEditPage from "../Components/Pages/AddEdit";
import MainPage from "../Components/Pages/Main";

Photo.propTypes = {};

function Photo(props) {
  const match = useRouteMatch();
  console.log({ match });

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />

      <Route path={`${match.url}/add`} component={AddEditPage} />
      <Route path={`${match.url}/:photoId`} component={AddEditPage} />
    </Switch>
  );
}

export default Photo;
