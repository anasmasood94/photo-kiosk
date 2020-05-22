import React, { useEffect, useContext } from 'react';
// import * as firebase from 'firebase';

import player from '../../assets/select_screen/player.png';
import selectedPlayer from '../../assets/select_screen/selected_player.png';
import button1 from '../../assets/select_screen/button1.png';
import quit from '../../assets/select_screen/quit.png';

import { CodeContext } from '../../contexts/code_context_container';
import { useHistory } from 'react-router-dom'

const SelectMember = () => {
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

  const handleTakePhoto = () => {
    history.push('/send');
  }

  return (
    <div className=" row select_screen_background">
      <div className="container">

        <section>
          <div>
            <div className="container">
              <div className="d-block section_area">

              <div className="row select_player_row1">
                <div className="col-md-12 player_text">
                  <h1>SELECT UP TO 4 PLAYERS</h1>
                </div>
              </div>



               <div className="row players_row2">
                <div className="col-sm-12 player_col float-left mx-auto">
                  <img src={player} className="player_img img-responsive img-fluid mx-auto" alt="Player"/>
                  <img src={player} className="player_img img-responsive img-fluid mx-auto" alt="Player"/>
                  <img src={player} className="player_img img-responsive img-fluid mx-auto" alt="Player"/>
                </div>
              </div>

              <div className="row players_row3">
                <div className="col-sm-12 player_col float-left mx-auto ">
                  <img src={player} className="player_img  img-responsive img-fluid mx-auto" alt="Player"/>
                  <img src={player} className="player_img img-responsive img-fluid mx-auto" alt="Player"/>

                  <img src={selectedPlayer} className="player_img img-responsive img-fluid mx-auto" alt="Selected Player"/>
                </div>
              </div>

              <div className="row players_row4">
                <div className="col-sm-12 player_col float-left mx-auto ">
                  <img src={player} className="player_img  img-responsive img-fluid mx-auto" alt="Player"/>
                  <img src={player} className="player_img img-responsive img-fluid mx-auto" alt="Player"/>
                  <img src={player} className="player_img img-responsive img-fluid mx-auto" alt="Player"/>
                </div>
              </div>


              <div className="row select_player_row5">
                <div className="col-md-12 take_photo_button">
                  <img src={button1} className="take_photo_button_img img-fluid mx-auto d-block" alt="Button" onClick={handleTakePhoto}/>
                </div>
              </div>


              <div className="row menu_row6 mx-auto img-fluid ">
                <div className="col-md-12 mx-auto menu_button">
                  <img src={quit} className="menu_button2_img img-fluid cursor-pointer" alt="Quit" onClick={handleQuit}/>
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

export default SelectMember
