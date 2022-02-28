import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Payment from "../views/Payment";
import PaymentStatus from "../components/PaymentStatus";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Payment" component={Payment} />
        <Route
          exact
          path="/payment/status/:paymentId"
          component={PaymentStatus}
        />
      </Switch>
    </Router>
  );
};

export default Routes;