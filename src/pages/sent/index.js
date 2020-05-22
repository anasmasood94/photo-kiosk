import React, { useEffect, useContext } from 'react';
// import * as firebase from 'firebase';

import sent from '../../assets/sent/sent.png';
import thank_you from '../../assets/sent/thank_you.png';
import exit from '../../assets/sent/exit.png';

import { CodeContext } from '../../contexts/code_context_container';
import { useHistory } from 'react-router-dom'

const Sent = () => {
  const { code, setCode } = useContext(CodeContext);
  let history = useHistory();

  useEffect(() => {
    if ( !code ) {
      history.push('/');
      return;
    }
  });

  const handleQuit = () => {
    setCode('');
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
