import React, { useEffect, useContext } from 'react';
// import * as firebase from 'firebase';

import screen from '../../assets/data/screen.jpg';
import { CodeContext } from '../../contexts/code_context_container';
import { useHistory } from 'react-router-dom'

const DataEntry = () => {
  const { code } = useContext(CodeContext);
  let history = useHistory();

  useEffect(() => {
    if ( !code ) {
      history.push('/');
      return;
    }
  });

  const handleSubmit = () => {
    history.push('/sent');
  }

  return (
    <div class=" row data_background">
      <div class="container">
        <section>
          <div>
            <div class="container">
              <div class="d-block data_section_area">
                <div class="row data_row1">
                  <div class="col-md-12">
                    <img src={screen} class="data_screen_img img-fluid img-responsive mx-auto d-block" alt="screen"/>
                  </div>
                </div>

                <div class="row data_row2 ">
                  <div class="col-md-12 mx-auto d-block px-0">
                    <div class="data_input_background mx-auto rounded">
                      <form>
                        <input type="email" name="email" placeholder="Email" class="data_email"/>
                        <input type="phone" name="email" placeholder="Phone" class="data_phone"/>
                        <button type="button" class="data_submit" onClick={handleSubmit}>
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
