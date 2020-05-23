import React, { useEffect, useContext } from 'react';
import * as firebase from 'firebase';
import { CodeContext } from '../../contexts/code_context_container';
import { useHistory } from 'react-router-dom';

import photo1 from '../../assets/photo/photo1.png';
import button1 from '../../assets/photo/button1.png';
import photo2 from '../../assets/photo/photo2.png';
import button2 from '../../assets/photo/button2.png';
import quit from '../../assets/photo/quit.png';

const SelectTeam = () => {
  const { code, setCode, setTeam, baseUrl } = useContext(CodeContext);
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

  const updateFirebase = (redirect_to) => {
    firebase.database().ref(baseUrl + '/ButtonState/Start').set(-1);
    firebase.database().ref(baseUrl + '/ButtonState/' + redirect_to).set(1);
  }

  const handleQuit = () =>{
    updateFirebase("Back");
    setCode('');
    history.push('/');
  }

  const handle4Player = () => {
    updateFirebase("Multi");
    setTeam(4);
    history.push('/select-member');
  }

  const handleSinglePlayer = () => {
    updateFirebase("Solo");
    setTeam(1);
    history.push('/select-member');
  }

  return (
    <div className="row photo_background">
      <div className="container">

        <section>
          <div>
            <div className="container">

              <div className="row photo1_row">
                <div className="col-md-12">
                  <img src={photo1} className="photo1_img img-fluid mx-auto d-block" alt="People"/>
                  <img src={button1} className="cursor-pointer button1_img img-fluid mx-auto d-block" alt="4 Player" onClick={handle4Player}/>
                </div>
              </div>

              <div className="row photo2_row">
                <div className="col-md-12">
                  <img src={photo2} className="photo2_img img-fluid mx-auto d-block" alt="People"/>
                  <img src={button2} className="cursor-pointer button2_img img-fluid mx-auto d-block" alt="1 Player" onClick={handleSinglePlayer}/>
                </div>
              </div>

              <div className="row photo_quit_row">
                <div className="col-md-12">
                  <img src={quit} className="cursor-pointer photo_quit_img img-fluid mx-auto d-block" alt="Quit" onClick={handleQuit}/>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default SelectTeam
