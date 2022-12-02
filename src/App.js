import React, {useState} from 'react'
import Profile from './components/Profile/index'
import Login from './components/Login/index'
import Registration from './components/Registration/index'
import Map from "./components/Map/index";
import WrapperComponent from "./components/wrapperComponent";
import './App.css';


const App = () => {

    const [currentPage, setCurrentPage] = useState('')

    const navigateTo = (page) => {
        setCurrentPage(page)
    }

    const customRouter = (page) => {
        switch (page) {
            case "map":
                return <Map onNavigate={navigateTo} />;
            case "profile":
                return <Profile onNavigate={navigateTo} />;
            case "login":
                return <Login onNavigate={navigateTo} />;
            case "registration":
                return <Registration onNavigate={navigateTo} />;
            default:
                return <div />
        }
    }

    return (
        <WrapperComponent currentPage={currentPage} navigateTo={navigateTo}>
            {customRouter(currentPage)}
        </WrapperComponent>
    )
}

export default App;
