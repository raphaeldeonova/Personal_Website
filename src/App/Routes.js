import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePage from '../HomePage/HomePage.js'
import AcademicPage from '../AcademicPage/AcademicPage.js'
import ProjectsPage from '../ProjectsPage/ProjectsPage.js'
import BackgroundPage from '../BackgroundPage/BackgroundPage.js'

function Routes(){
    return(
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/academic' component={AcademicPage} />
            <Route exact path='/projects' component={ProjectsPage} />
            <Route exact path='/background' component={BackgroundPage} />
        </Switch>
    )
}

export default Routes