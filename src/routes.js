import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EnterPin from './pages/enter-pin';
import SelectTeam from './pages/select-team';
import SelectMember from './pages/select-member';
import Start from './pages/start';
import Send from './pages/send';
import DataEntry from './pages/data_entry';
import Sent from './pages/sent';

export const AppRoutes = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={ EnterPin }/>
      <Route exact path='/start' component={ Start }/>
      <Route exact path='/select-team' component={ SelectTeam }/>
      <Route exact path='/select-member' component={ SelectMember }/>
      <Route exact path='/send' component={ Send }/>
      <Route exact path='/data-entry' component={ DataEntry }/>
      <Route exact path='/sent' component={ Sent }/>
    </Switch>
  )
}
