import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Header from './comp/Header'
import Footer from './comp/Footer'
import Toast from './comp/Toast'
import Admin from './admin'
import Faculty from './faculty'
import Student from './student'
export default function App() {
    return (
        <>
            <BrowserRouter>
                <>
                    <Header />
                    <div className='container'>
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route exact path="/Admin/:x" component={Admin} />
                            <Route exact path="/Faculty/:x" component={Faculty} />
                            <Route exact path="/Student/:x" component={Student} />
                        </Switch>
                    </div>
                    <Footer />
                </>
            </BrowserRouter>
        </>
    )
}
