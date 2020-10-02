import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from '../HomePage/HomePage.js'
import AcademicPage from '../AcademicPage/AcademicPage.js'

function Routes(){
    return(
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/academic' component={AcademicPage} />
        </Switch>
    )
}

export default Routes