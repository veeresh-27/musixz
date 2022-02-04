import React,{useState} from 'react';
import classes from './Bottom.module.css'
import GIF from '../../Utils/playing.gif'


function Bottom(props) {
  
  return (
    <div className={classes.bottom}>
          <input type="range" name="range" id="myProgressBar" min="0" max="100" className={classes.myProgressBar}/>
          <div className={classes.icons}>
            <button className={classes.backward}> <i className="fas fa-3x fa-step-backward"></i></button>
            <button className={classes.play} ><i className="far  fa-3x fa-play-circle"></i> </button>
            <button className={classes.forward}><i className="fas fa-3x fa-step-forward"></i> </button>
          
          </div>
          <div className={classes.songInfo}>
              <img src={GIF} alt="" width='42px' />Let Me Love You - Justin Biber
          </div>
      </div>

  );

}

export default Bottom;
