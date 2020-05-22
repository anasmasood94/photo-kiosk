import React, { useEffect, useContext } from 'react';
// import * as firebase from 'firebase';

import photo1 from '../../assets/photo/photo1.png';
import button1 from '../../assets/photo/button1.png';
import photo2 from '../../assets/photo/photo2.png';
import button2 from '../../assets/photo/button2.png';
import quit from '../../assets/photo/quit.png';

import { CodeContext } from '../../contexts/code_context_container';
import { useHistory } from 'react-router-dom'

const SelectTeam = () => {
  const { code, setCode } = useContext(CodeContext);
  let history = useHistory();

  useEffect(() => {
    if ( !code ) {
      history.push('/');
      return;
    }
  });

  const handleQuit = () =>{
    setCode('');
    history.push('/');
  }

  const handle4Player = () => {
    history.push('/select-member');
  }

  const handleSinglePlayer = () => {
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
