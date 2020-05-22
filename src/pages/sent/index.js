import React, { useEffect, useContext } from 'react';
import * as firebase from 'firebase';

import sent from '../../assets/sent/sent.png';
import thank_you from '../../assets/sent/thank_you.png';
import exit from '../../assets/sent/exit.png';

import { CodeContext } from '../../contexts/code_context_container';
import { useHistory } from 'react-router-dom'

const Sent = () => {
  const { code, setCode, setTeam } = useContext(CodeContext);
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
      firebase.database().ref('Application/ButtonState/Back').set(1);
      history.push('/');
      return;
    }
  });

  const handleQuit = () => {
    setCode('');
    setTeam(0);
    firebase.database().ref('Application/ButtonState/DataSubmited').set(-1);
    firebase.database().ref('Application/ButtonState/Back').set(1);
    history.push('/');
  }

  return (
    <div class=" row sent_background">
      <div class="container">

        <section>
          <div>
            <div class="container">
              <div class="d-block sent_section_area">

              <div class="row sent_row1">
                <div class="col-md-12">
                  <img src={sent} class="sent_img img-fluid img-responsive mx-auto d-block" alt="Sent"/>
                </div>
              </div>

              <div class="row sent_row2">
                <div class="col-md-12">
                  <img src={thank_you} class="thank_you_img img-fluid img-responsive mx-auto d-block" alt="Thank You"/>
                </div>
              </div>

              <div class="row sent_row3">
                <div class="col-md-12">
                  <img src={exit} class="exit_img img-fluid img-responsive mx-auto d-block" alt="Exit" onClick={handleQuit}/>
                </div>
              </div>

              </div>
            </div>
          </div>
        </section>


      </div>
    </div>
  )
}

export default Sent
