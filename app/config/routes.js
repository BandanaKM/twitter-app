import React from 'react'
import { BrowserRouter, Route, Router, hashHistory } from 'react-router-dom'
import { MainContainer } from '../containers'

const routes = (
  <BrowserRouter history={hashHistory}>
    <Route path='/' component={MainContainer} />
  </BrowserRouter>
)

export default routes
