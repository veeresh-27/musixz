import React,{useState} from 'react';
import classes from './Playbar.module.css'
import Songlist from '../Songlist/Songlist';
import Bottom from '../Bottom/Bottom';
import Songs from '../../Songs'



function Playbar() {

 
 

  return <div className={classes.container}>
      <div className={classes.playbar}>
        <Songlist/>
        <div className={classes.songBanner}></div>
      </div>
       <Bottom />
  </div>;

}
export default Playbar;
