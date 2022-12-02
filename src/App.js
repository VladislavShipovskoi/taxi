import React, {useEffect, useState} from 'react'
import Profile from './components/Profile/index'
import Login from './components/Login/index'
import Registration from './components/Registration/index'
import Map from "./components/Map/index";
import WrapperComponent from "./components/wrapperComponent";
import {withAuth} from "./components/authContext";
import './App.css';


const App = (props) => {
    const [currentPage, setCurrentPage] = useState('')

    useEffect(() => {
        if (!props.isLoggedIn) {
            setCurrentPage("login")
        } else {
            setCurrentPage("map")
        }
    }, [props.isLoggedIn])

    const navigateTo = (page) => {
        if (props.isLoggedIn) {
            setCurrentPage(page)
        } else {
            setCurrentPage("login")
        }
    }

    const customRouter = (page) => {
        switch (page) {
            case "map":
                return <Map onNavigate={navigateTo} {...props} />;
            case "profile":
                return <Profile onNavigate={navigateTo} {...props} />;
            case "login":
                return <Login onNavigate={navigateTo} {...props} />;
            case "registration":
                return <Registration onNavigate={navigateTo} {...props} />;
            default:
                return <Map onNavigate={navigateTo} {...props} />;
        }
    }

    return (
        <WrapperComponent currentPage={currentPage} navigateTo={navigateTo} {...props}>
            {customRouter(currentPage)}
        </WrapperComponent>
    )
}

export default withAuth(App);
