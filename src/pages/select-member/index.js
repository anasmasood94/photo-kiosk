import React, { useEffect, useContext, useState } from 'react';
import * as firebase from 'firebase';

import player_0 from '../../assets/select_screen/0.png';
import player_1 from '../../assets/select_screen/1.png';
import player_2 from '../../assets/select_screen/2.png';
import player_3 from '../../assets/select_screen/3.png';
import player_4 from '../../assets/select_screen/4.png';
import player_5 from '../../assets/select_screen/5.png';
import button1 from '../../assets/select_screen/button1.png';
import quit from '../../assets/select_screen/quit.png';
import frame from '../../assets/select_screen/frame.png';
import frame1 from '../../assets/select_screen/frame1.png';

import { CodeContext } from '../../contexts/code_context_container';
import { useHistory } from 'react-router-dom'

const SelectMember = () => {
  const { code, setCode, team } = useContext(CodeContext);
  let history = useHistory();
  const [ selectedPlayers, setSelectedPlayers ] = useState([]);

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
    firebase.database().ref('Application/ButtonState/' + (team > 1 ? 'Multi' : 'Solo' )).set(-1);
    firebase.database().ref('Application/ButtonState/Back').set(1);
    setCode('');
    history.push('/');
  }

  const handleTakePhoto = () => {
    if ( selectedPlayers.length < team )
      return;

    firebase.database().ref('Application/ButtonState/TakePhoto' + (team > 1 ? 'Multi' : 'Solo' )).set(1);
    firebase.database().ref('Application/ButtonState/' + (team > 1 ? 'Multi' : 'Solo' )).set(-1);
    history.push('/send');
  }

  const handlePlayerClick = (e, player) => {
    if ( !selectedPlayers.includes(player)){
      if ( selectedPlayers.length < team ){
        firebase.database().ref('Application/ButtonState/' + player).set(1);
        let array = selectedPlayers.concat([player]);
        setSelectedPlayers(array);
      }
    }
    else {
      firebase.database().ref('Application/ButtonState/' + player).set(-1);
      let array = selectedPlayers.slice()
      array.splice(selectedPlayers.indexOf(player), 1);
      setSelectedPlayers(array);
    }
  }

  const renderFrame = (player) => {
    return selectedPlayers.includes(player) ? frame1 : frame;
  }

  const renderPlayer = (player) => {
    return (<div className="player_wrap" onClick={(e) => handlePlayerClick(e, player)}>
      <img src={ selectedPlayers.includes(player) ? frame1 : frame } className="player_img img-responsive img-fluid" alt="Player"/>
      <img src={player_0} className="player_img img-responsive img-fluid mx-auto player-cuttout" alt="Player"/>
    </div>);
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
                <div className="col-sm-12 d-flex align-items-center">
                 <div className="player_wrap">
                    <img src={ renderFrame(0) } className="player_img img-responsive img-fluid" alt="Player"/>
                    <img src={player_0} className="player_img img-responsive img-fluid mx-auto player-cuttout" alt="Player" onClick={(e) => handlePlayerClick(e, 0)}/>
                  </div>
                  <div className="player_wrap">
                    <img src={ renderFrame(1) } className="player_img img-responsive img-fluid" alt="Player"/>
                    <img src={player_1} className="player_img img-responsive img-fluid mx-auto player-cuttout" alt="Player" onClick={(e) => handlePlayerClick(e, 1)}/>
                  </div>
                  <div className="player_wrap">
                    <img src={ renderFrame(2) } className="player_img img-responsive img-fluid" alt="Player"/>
                    <img src={player_2} className="player_img img-responsive img-fluid mx-auto player-cuttout" alt="Player" onClick={(e) => handlePlayerClick(e, 2)}/>
                  </div>
                </div>
              </div>

              <div className="row players_row3 mt-1">
                <div className="col-sm-12 d-flex align-items-center ">
                  <div className="player_wrap">
                    <img src={ renderFrame(3) } className="player_img img-responsive img-fluid" alt="Player"/>
                    <img src={player_3} className="player_img img-responsive img-fluid mx-auto player-cuttout" alt="Player" onClick={(e) => handlePlayerClick(e, 3)}/>
                  </div>
                  <div className="player_wrap">
                    <img src={ renderFrame(4) } className="player_img img-responsive img-fluid" alt="Player"/>
                    <img src={player_4} className="player_img img-responsive img-fluid mx-auto player-cuttout" alt="Player" onClick={(e) => handlePlayerClick(e, 4)}/>
                  </div>
                  <div className="player_wrap">
                    <img src={ renderFrame(5) } className="player_img img-responsive img-fluid" alt="Player"/>
                    <img src={player_5} className="player_img img-responsive img-fluid mx-auto player-cuttout" alt="Player" onClick={(e) => handlePlayerClick(e, 5)}/>
                  </div>
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
