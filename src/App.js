import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom";
import {connect} from "react-redux";

import Profile from './components/Profile/index'
import Map from "./components/Map/index";
import Registration from "./components/Registration";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";

import './App.css';


const App = () => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<PrivateRoute/>}>
                    <Route exact path='/' element={<Map />}/>
                </Route>

                <Route exact path='/profile' element={<PrivateRoute/>}>
                    <Route exact path='/profile' element={<Profile/>}/>
                </Route>

                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/registration" element={<Registration/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </>
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps, null)(App);
