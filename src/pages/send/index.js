import React, { useEffect, useContext, useState } from 'react';
import * as firebase from 'firebase';

import screen from '../../assets/send/screen.jpg';
import text1 from '../../assets/send/text1.png';
import button1 from '../../assets/send/button1.png';
import text2 from '../../assets/send/text2.png';
import button2 from '../../assets/send/button2.png';

import { CodeContext } from '../../contexts/code_context_container';
import { useHistory } from 'react-router-dom'

const Send = () => {
  const { code, team, baseUrl } = useContext(CodeContext);
  let history = useHistory();
  const [ currentImage, setCurrentImage ] = useState();

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

    firebase.database().ref(baseUrl + '/CurrentPhoto').on('value', function(snapshot) {
      if (snapshot.val())
        setCurrentImage(snapshot.val());
    });
  });

  const handleSendEmail = () => {
    firebase.database().ref(baseUrl + '/ButtonState/EnterData').set(1);
    firebase.database().ref(baseUrl + '/ButtonState/' + (team > 1 ? 'Multi' : 'Solo' )).set(-1);
    history.push('/data-entry');
  }

  return (
    <div className=" row send_screen_background">
      <div className="container">

        <section>
            <div className="container">
              <div className="d-block send_section_area">

              <div className="row send_row1">
                <div className="col-md-12 frame-wrap">
                  <img src={screen} className="screen_img img-fluid mx-auto d-block" alt="Screen"/>
                  {currentImage ?
                    <img src={currentImage} className="frame-inside-image screen_img img-fluid mx-auto d-block" alt="Screen"/>
                    : null
                  }
                </div>
              </div>

              <div className="row send_row2">
                <div className="col-md-12">
                  <img src={text1} className="text1_img img-fluid mx-auto d-block" alt="Test"/>
                </div>
              </div>

              <div className="row send_row3">
                <div className="col-md-12">
                  <div>
                    <img src={button1} className="button1_img img-fluid mx-auto d-block" alt="Email" onClick={handleSendEmail}/>
                  </div>
                </div>
              </div>

              <div className="row send_row4">
                <div className="col-md-12">
                  <img src={text2} className="text2_img img-fluid mx-auto d-block" alt="Or"/>
                </div>
              </div>

              <div className="row send_row5">
                <div className="col-md-12">
                  <div>
                    <img src={button2} className="button2_img img-fluid mx-auto d-block" alt="Social"/>
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

export default Send
