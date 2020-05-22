import React, { useEffect, useContext } from 'react';
// import * as firebase from 'firebase';

import screen from '../../assets/send/screen.jpg';
import text1 from '../../assets/send/text1.png';
import button1 from '../../assets/send/button1.png';
import text2 from '../../assets/send/text2.png';
import button2 from '../../assets/send/button2.png';

import { CodeContext } from '../../contexts/code_context_container';
import { useHistory } from 'react-router-dom'

const Send = () => {
  const { code } = useContext(CodeContext);
  let history = useHistory();

  useEffect(() => {
    if ( !code ) {
      history.push('/');
      return;
    }
  });

  const handleSendEmail = () => {
    history.push('/data-entry');
  }

  return (
    <div class=" row send_screen_background">
      <div class="container">

        <section>
            <div class="container">
              <div class="d-block send_section_area">

              <div class="row send_row1">
                <div class="col-md-12">
                  <img src={screen} class="screen_img img-fluid mx-auto d-block" alt="Screen"/>
                </div>
              </div>

              <div class="row send_row2">
                <div class="col-md-12">
                  <img src={text1} class="text1_img img-fluid mx-auto d-block" alt="Test"/>
                </div>
              </div>

              <div class="row send_row3">
                <div class="col-md-12">
                  <div>
                    <img src={button1} class="button1_img img-fluid mx-auto d-block" alt="Email" onClick={handleSendEmail}/>
                  </div>
                </div>
              </div>

              <div class="row send_row4">
                <div class="col-md-12">
                  <img src={text2} class="text2_img img-fluid mx-auto d-block" alt="Or"/>
                </div>
              </div>

              <div class="row send_row5">
                <div class="col-md-12">
                  <div>
                    <img src={button2} class="button2_img img-fluid mx-auto d-block" alt="Social"/>
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
