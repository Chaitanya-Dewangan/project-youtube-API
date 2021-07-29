import React, { useState, useEffect } from "react";
import {Container} from "react-bootstrap";
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import SearchScreen from "./screens/searchScreen/SearchScreen";
import './_app.scss';
import { useSelector } from "react-redux";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import WatchScreen from "./screens/watchScreen/WatchScreen";
import SubscriptionScreen from "./screens/subscriptionScreen/SubscriptionScreen";
import ChannelScreen from "./screens/channelScreen/ChannelScreen";
import AboutScreen from "./screens/aboutScreen/AboutScreen";

const Layout = ({children}) => {
    const [sidebar,toggleSidebar] = useState(false);
    const handleToggleSidebar =()=>toggleSidebar(value => !value)
    return (
        <div>
            <Header handleToggleSidebar={handleToggleSidebar}/>
            <div className="app__container">
                <Sidebar 
                    sidebar={sidebar} 
                    handleToggleSidebar={handleToggleSidebar}
                />
                <Container fluid className="app__main">
                    {children}
                </Container>
            </div>
        </div>
    )
}



const App = () => {
    const history = useHistory();
    const {accessToken,loading} = useSelector(state => state.auth);
    useEffect(() => {

        if(!loading && !accessToken){
            history.push('/auth')
        }

    }, [accessToken, loading,history]);
    return (
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route path="/auth">
          <LoginScreen />
        </Route>
        <Route path="/search/:query">
          <Layout>
            <SearchScreen />
          </Layout>
        </Route>
        <Route path="/about">
          <Layout>
            <AboutScreen />
          </Layout>
        </Route>
        <Route path="/watch/:id">
          <Layout>
            <WatchScreen />
          </Layout>
        </Route>
        <Route path="/feed/subscriptions">
          <Layout>
            <SubscriptionScreen />
          </Layout>
        </Route>
        <Route path="/channel/:channelId">
          <Layout>
            <ChannelScreen />
          </Layout>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    );
}

export default App
