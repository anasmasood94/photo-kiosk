import React, { useEffect, useContext, useState } from 'react';
import * as firebase from 'firebase';

import screen from '../../assets/data/screen.jpg';
import { CodeContext } from '../../contexts/code_context_container';
import { useHistory } from 'react-router-dom'

const DataEntry = () => {
  const { code, baseUrl } = useContext(CodeContext);
  let history = useHistory();
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ currentImage, setCurrentImage ] = useState('');

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

  const handleSubmit = () => {
    firebase.database().ref(baseUrl + '/ButtonState/DataSubmited').set(1);
    firebase.database().ref(baseUrl + '/ButtonState/EnterData').set(-1);
    history.push('/sent');
  }

  const handleEmailUpdate = (e) => {
    let value = e.target.value
    firebase.database().ref(baseUrl + '/Email').set(value);
    setEmail(value);
  }

  const handlePhoneUpdate = (e) => {
    let value = e.target.value
    firebase.database().ref(baseUrl + '/Phone').set(value);
    setPhone(value);
  }

  return (
    <div className=" row data_background">
      <div className="container">
        <section>
          <div>
            <div className="container">
              <div className="d-block data_section_area">
                <div className="row data_row1">
                  <div className="col-md-12 frame-wrap">
                    <img src={screen} className="sdata_screen_img img-fluid img-responsive mx-auto d-block" alt="Screen"/>
                    <img src={currentImage} className="frame-inside-image screen_img img-fluid mx-auto d-block" alt="Screen"/>
                  </div>
                </div>

                <div className="row data_row2 ">
                  <div className="col-md-12 mx-auto d-block px-0">
                    <div className="data_input_background mx-auto rounded">
                      <form>
                        <input type="email" value={email} onChange={handleEmailUpdate} placeholder="Email" className="data_email"/>
                        <input type="phone" value={phone} onChange={handlePhoneUpdate} placeholder="Phone" className="data_phone"/>
                        <button type="button" className="data_submit" onClick={handleSubmit}>
                          Submit
                        </button>
                      </form>
                    </div>
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

export default DataEntry
