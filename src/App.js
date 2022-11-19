import React, {Fragment, useState} from 'react'
import {Header} from './components/Header'
import {Profile} from './components/Profile'
import {Login} from './components/Login'
import {Registration} from './components/Registration'
import {Map} from "./components/Map";
import './App.css';


const App = () => {

    const [currentPage, setCurrentPage] = useState('home')

    const navigateTo = (page) => {
        setCurrentPage(page)
    }

    const customRouter = (page) => {
        switch (page) {
            case "map":
                return <Map />;
            case "profile":
                return <Profile />;
            case "login":
                return <Login onNavigate={navigateTo} />;
            case "registration":
                return <Registration onNavigate={navigateTo} />;
            default:
                return <Map />
        }
    }

    return (
        <Fragment>
            {!["login", "registration"].includes(currentPage) && <Header onNavigate={navigateTo} currentPage={currentPage} />}
            {customRouter(currentPage)}
        </Fragment>
    )
}

export default App;
