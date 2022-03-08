import React from "react";

import "./App.css";
import "./vendor/fontawesome-free/css/all.css";
import "./css/sb-admin-2.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardRestaurant from "./features/restaurant/DashboardRestaurant";
import FirstLogin from "./features/restaurant/firstLogin/FirstLoginManagement";
import RestaurentDetailsManagement from "./features/restaurant/details/RestaurentDetailsManagement";
import SimpleDropZone from "./features/simple-dropzone.component";
import BankDetailsManagement from "./features/restaurant/firstLogin/bankDetails/BankDetailsManagement";
import BranchStaffManagement from "./features/restaurant/branchStaffDetail/BranchStaffManagement";
import BranchContent from "./features/restaurant/branchStaffDetail/pages/BranchContent";
import StaffTypeContent from "./features/restaurant/branchStaffDetail/pages/StaffTypeContent";
import StaffContent from "./features/restaurant/branchStaffDetail/pages/StaffContent";
import MenuCatelogManagement from "./features/restaurant/menuCatelog/MenuCatelogManagement";
import DishContent from "./features/restaurant/menuCatelog/pages/DishContent";
import ComboContent from "./features/restaurant/menuCatelog/pages/ComboContent";
import IngredientContent from "./features/restaurant/menuCatelog/pages/IngredientContent";
import Order from "./features/restaurant/OrderManagement/Order";
import Offer from "./features/restaurant/offerManagement/Offer";
import Payments from "./features/restaurant/payments/Payments";
import RevenueGrowth from "./features/restaurant/RevenueGrowth/RevenueGrowth";
import { Addoffer } from "./features/restaurant/offerManagement/addoffer/Addoffer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
      

          {/* For Restaurant Management  */}

          <Route exact path="/restaurant" component={DashboardRestaurant} />
          <Route exact path="/firstLogin" component={FirstLogin} />
          {/*  <Route exact path="/pickUpLocation" component={PickUpLocation} /> */}
          <Route
            exact
            path="/restaurantDetails"
            component={RestaurentDetailsManagement}
          />
          <Route exact path="/imagePreview" component={SimpleDropZone} />
          <Route
            exact
            path="/resbankdetails"
            component={BankDetailsManagement}
          />
          <Route
            exact
            path="/branchStaffDetails"
            component={BranchStaffManagement}
          />
          <Route exact path="/branchDetail" component={BranchContent} />
          <Route exact path="/staffType" component={StaffTypeContent} />
          <Route exact path="/staff" component={StaffContent} />
          <Route exact path="/menuCatelog" component={MenuCatelogManagement} />
          <Route exact path="/menuCatelog/dish" component={DishContent} />
          <Route exact path="/menuCatelog/combo" component={ComboContent} />
          <Route exact path="/payments" component={Payments} />
          <Route exact path="/revenueGrowth" component={RevenueGrowth} />
          <Route
            exact
            path="/menuCatelog/ingredient"
            component={IngredientContent}
          />
          <Route exact path="/Order" component={Order} />
          <Route exact path="/Offer" component={Offer} />
          <Route exact path="/addoffer" component={Addoffer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
