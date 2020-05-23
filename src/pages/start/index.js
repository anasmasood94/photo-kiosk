import React, { useEffect, useContext } from 'react';
import * as firebase from 'firebase';
import { CodeContext } from '../../contexts/code_context_container';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/start/logo.png';
import bud_light from '../../assets/start/bud_light.jpg';
import start_button from '../../assets/start/start_button.png';

const Start = () => {
  const { code, baseUrl } = useContext(CodeContext);
  let history = useHistory();

  if( !firebase.apps.length ) {
    firebase.initializeApp({
      apiKey: "AIzaSyCb0qbEACfbx48p86a03xa_f81q2k5rGEo",
      authDomain: "photobooth-31912.firebaseapp.com",
      databaseURL: "https://photobooth-31912.firebaseio.com",
      projectId: "photobooth-31912",
      storageBucket: "photobooth-31912.appspot.com",
      messagingSenderId: "906833034100",
      appId: "1:906833034100:web:8860adc17031be6dcd8a21"
    });
  }

  useEffect(() => {
    if ( !code ) {
      firebase.database().ref(baseUrl + '/ButtonState/Back').set(1);
      history.push('/');
      return;
    }
  });

  const handleStart = () =>{
    firebase.database().ref(baseUrl + '/ButtonState/Start').set(1);
    history.push('/select-team');
  }

  return (
    <div className=" row background_img">
      <div className="container">

        <section>
          <div>
            <div className="container">
              <div className="row logo">
                <div className="col-md-12">
                  <img src={logo} className="logo_img img-fluid mx-auto d-block" alt="logo"/>
                </div>
              </div>

              <div className="row bud_light">
                <div className="col-md-12">
                  <img src={bud_light} className="bud_light_img img-fluid mx-auto d-block" alt="Bud Light"/>
                </div>
              </div>

              <div className="row buton">
                <div className="col-md-12">
                  <img src={start_button} className="buton_img img-fluid mx-auto d-block" alt="start" onClick={handleStart}/>
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
