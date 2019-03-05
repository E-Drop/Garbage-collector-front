import React, { Component } from 'react'
import authService from '../lib/auth-service';

export const AuthContext = React.createContext(
  // authStore // default value
);

export const { Provider, Consumer }  = AuthContext.Consumer;

export const withAuth = (Comp) => {
  return class WithAuth extends Component {
    render() {
      return (
        <Consumer> 
          {(authStore) => {
            return <Comp
              isLogged={authStore.isLogged}
              user={authStore.user}
              logout={authStore.logout}
              login={authStore.login}
              signup={authStore.signup}
              update={authStore.updateProvider}
              home={authStore.updateHome}
              {...this.props} />
              // here you specifies the name of props on your consumer, and wich actions of
              // provider execute, for example update, is calling to updateProvider function
              // updateProvider in provider is calling updateUserState.
              // updateUserState is calling to updateProfile in auth-service and updating state in provider
          }}
        </Consumer>
      )
    }    
  }
}

export default class AuthProvider extends Component {
  state = {
    isLogged: false,
    user: {},
    homelocation: "",
    status: 'loading'
  }

  setUser = (user) => {
    this.setState({
      isLogged: true,
      user,
    })
  }

  logoutUser = () => {
    return authService.logout()
      .then(() => {
        this.setState({ 
          isLogged: false,
          user: {},
        });
      })
      .catch( error => console.log(error))
  }

  updateUserState = (user) => {
    return authService.updateProfile(user)
    .then((user) => {
      this.setUser(user);
    })
  }
  updateUserHome = (id, home) => {
    return authService.updateHome(id, home)
    .then((user) => {
      this.setState({
        homelocation: user.home
      })
      return user;
    })
  }

  loginUser = (body) => {
    return authService.login(body)
      .then((user) => {
        this.setUser(user);
      })
      .catch(error => console.log(error))
  }

  signupUser = (body) => {
    return authService.signup(body)
      .then((user) => {
        this.setUser(user);
      })
      .catch(error => console.log(error))
  }

  componentDidMount() {
    authService.me()
      .then((user) => {
        this.setState({
          isLogged: true,
          user,
          status: 'loaded'
        })
      })
      .catch((error) => {
        this.setState({
          isLogged: false,
          user: {},
          status: 'loaded'
        });
      })
  }

  render() {
    const { isLogged, user, status } = this.state;
    const { children } = this.props;
    switch (status) {
      case 'loading':
        return <div>Loading</div>
      default:
        return (
          <Provider value={
            { isLogged,
              user,
              logout: this.logoutUser, 
              login: this.loginUser,
              signup: this.signupUser,
              updateProvider: this.updateUserState,
              updateHome: this.updateUserHome,
            }}>
            {children}
          </Provider>
        );
    }
  }
}
