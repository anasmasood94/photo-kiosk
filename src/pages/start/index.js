import React, { useEffect, useContext } from 'react';
// import * as firebase from 'firebase';

import logo from '../../assets/start/logo.png';
import bud_light from '../../assets/start/bud_light.jpg';
import start_button from '../../assets/start/start_button.png';

import { CodeContext } from '../../contexts/code_context_container';
import { useHistory } from 'react-router-dom'

const Start = () => {
  const { code } = useContext(CodeContext);
  let history = useHistory();

  useEffect(() => {
    if ( !code ) {
      history.push('/');
      return;
    }
  });

  const handleStart = () =>{
    history.push('/select-team');
  }

  return (
    <div class=" row background_img">
      <div class="container">

        <section>
          <div>
            <div class="container">
              <div class="row logo">
                <div class="col-md-12">
                  <img src={logo} class="logo_img img-fluid mx-auto d-block" alt="logo"/>
                </div>
              </div>

              <div class="row bud_light">
                <div class="col-md-12">
                  <img src={bud_light} class="bud_light_img img-fluid mx-auto d-block" alt="Bud Light"/>
                </div>
              </div>

              <div class="row buton">
                <div class="col-md-12">
                  <img src={start_button} class="buton_img img-fluid mx-auto d-block" alt="start" onClick={handleStart}/>
                </div>
              </div>

            </div>
          </div>
        </section>


      </div>
    </div>
  )
}

export default Start
