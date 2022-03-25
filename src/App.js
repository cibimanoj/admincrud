import './App.css';
import './styles/usercomponents.css';
import { SidemenuBar } from './components/SidemenuBar';
import { Header } from './components/Header';
import { Maincontent } from './components/Maincontent';
import { Error } from './components/ErrorPage';
import { Login } from './user components/Login';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useState, createContext } from 'react';
import { Forgotpassword } from './user components/Forgotpassword';
import { Register } from './user components/Register';
import { Viewprofile } from './user components/Viewprofile';
import { Edituserprofile } from './user components/Edituserprofile';
import { Viewuser } from './user components/Viewuser';
import { Edituser } from './user components/Edituser';

export const authContext = createContext(null);

function App() {
	const [menu, setMenu] = useState(true);
	const [login, setLogin] = useState(false);
	const [userName, setUserName] = useState('user');
	const [user, setUser] = useState(false);
	const [userId, setUserId] = useState(null);

	// All field items are stored in object to be passed as value in context
	const modes = {
		menu: menu,
		setMenu: setMenu,
		login: login,
		setLogin: setLogin,
		userName: userName,
		setUserName: setUserName,
		user: user,
		setUser: setUser,
		userId: userId,
		setUserId: setUserId,
	};

	// If user hasn't logged in the following routes only will work
	if (!login) {
		return (
			<authContext.Provider value={modes}>
				<Switch>
					<Route exact path="/">
						<Redirect to="/login" />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/forgot-password">
						<Forgotpassword />
					</Route>
					<Route path="/create-user">
						<Register />
					</Route>
					<Route path="**">
						<Error />
					</Route>
				</Switch>
				<footer>Copyright © Your Website 2020</footer>
			</authContext.Provider>
		);
	}

	// If the user is logged in all the following routes will work
	return (
		<authContext.Provider value={modes}>
			<div className="App">
				<div className="Wrapper">
					{menu ? '' : <SidemenuBar />}

					<div className="content-wrapper" style={{ width: menu ? '100%' : '72%' }}>
						<Header />

						<Switch>
							<Route exact path="/">
								<Maincontent />
							</Route>
							<Route path="/charts">Welcome to charts</Route>
							<Route path="/tables">Welcome to tables</Route>
							<Route path="/login">
								<Login />
							</Route>
							<Route path="/forgot-password">
								<Forgotpassword />
							</Route>
							<Route path="/create-user">
								<Register />
							</Route>
							<Route path="/users">
								<div className="viewuser-wrapper">
									<Viewuser />
								</div>
							</Route>
							<Route path="/edit-user/:id">
								<Edituser />
							</Route>
							<Route path="/profile/:id">
								<Viewprofile />
							</Route>
							<Route path="/edit-profile/:id">
								<Edituserprofile />
							</Route>
							<Route path="**">
								<Error />
							</Route>
						</Switch>
						<footer>Copyright © Your Website 2022</footer>
					</div>
				</div>
			</div>
		</authContext.Provider>
	);
}

export default App;