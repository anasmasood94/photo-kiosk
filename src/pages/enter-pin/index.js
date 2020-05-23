import React, { useState, useContext } from 'react';
import numberImage from '../../assets/pin/number.png';
import * as firebase from 'firebase';
import { useToasts } from 'react-toast-notifications'
import { CodeContext } from '../../contexts/code_context_container';
import { useHistory } from 'react-router-dom'

const EnterPin = () => {
  const [ number, setNumber ] = useState('');
  const [ disabled, setDisabled ] = useState(false);

  const { addToast } = useToasts();
  const { setCode, baseUrl } = useContext(CodeContext);
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

  const handleNumberChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value.length <= 4 && re.test(e.target.value))
      setNumber(e.target.value);
  }

  const handleNumberSubmit = (e) => {
    if ( number.length < 4 )
      return;

    setDisabled(true);
    firebase.database().ref(baseUrl + '/CurrentAppCode').once('value').then(function(snapshot) {
      var value = snapshot.val();
      if ( number == value ) {
        setCode(number);
        history.push('/start');
        setDisabled(false);
      }
      else {
        addToast("Code is incorrect, please try again.", { appearance: 'error', autoDismiss: 1000 });
        setDisabled(false);
      }
    });
  }

  return (
    <div className="row pin_background">
      <div className="container">
        <section>
          <div className="pin_section">
            <div className="container">
              <div className="row enter_nmuber_row">
                <div className="col-md-12">
                  <img src={numberImage} className="enter_nmuber img-fluid mx-auto d-block" alt="Add Number"/>
                </div>
              </div>

              <div className="row input_nmuber_row">
                <div className="col-md-12 pin-wrap" align="center">
                  <form>
                    <input type="number" value={number} onChange={handleNumberChange} disabled={disabled} maxLength="4" className="input_number" />
                    <br />
                    <button type="button" name="button" onClick={handleNumberSubmit} disabled={disabled} className="submit_button">
                      Submit
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default EnterPin
