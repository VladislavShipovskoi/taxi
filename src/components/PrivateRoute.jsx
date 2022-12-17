import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {connect} from "react-redux";
import Header from "./Header";


const PrivateRoute = (props) => {
    const {isLoggedIn} = props
    return isLoggedIn ? (
            <>
                <Header />
                <Outlet />
            </>
    ) : <Navigate to="/login" />
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps, null)(PrivateRoute);