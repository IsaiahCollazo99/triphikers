import React from "react";
import "./App.css";
import TripsPage from "./components/TripsPage/TripsPage";
import { Switch, Route } from "react-router-dom";
import CreateTripsContainer from "./components/CreateTrip/CreateTripContainer";
import DetailedTripPage from "./components/DetaliedTripPage/DetailedTripPage";
import LandingPage from "./components/LandingPage/LandingPage";
import CreateSignUpContainer from "./components/Login/SignUpContainer";
import LocationPage from "./components/Location/LocationPage"
import Login	from "./components/Login/Login"

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<LandingPage />
				</Route>

				
				{/* <Route path="/signUpFacebook">
          <SignUpFormWithFacebook />
        </Route>
        <Route path="/signUpGoogle">
          <SignUpFormWithGoogle/>
        </Route> */}

				<Route path="/signUp" >
					<CreateSignUpContainer />
				</Route>

				<Route path="/signIn" >
					<Login />
				</Route>
				
				<Route exact path="/trips">
					<TripsPage />
				</Route>

				<Route path="/trips/create">
					<CreateTripsContainer />
				</Route>

				<Route path="/trips/:id">
					<DetailedTripPage />
				</Route>
			
				<Route path="/location/:locationId">
					<LocationPage/>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
