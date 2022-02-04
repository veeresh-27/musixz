import React,{useState} from 'react';
import classes from './Songlist.module.css'
import Songs from '../../Songs'


function Songlist(props) {

  
  
  const music=[new Audio(Songs.song[0].mp3),new Audio(Songs.song[1].mp3),new Audio(Songs.song[2].mp3),new Audio(Songs.song[3].mp3),new Audio(Songs.song[4].mp3),new Audio(Songs.song[5].mp3),new Audio(Songs.song[6].mp3),new Audio(Songs.song[7].mp3),new Audio(Songs.song[8].mp3),new Audio(Songs.song[9].mp3)]
  const mySongs = Songs.song.map((item,id)=>{    
    const clickedPlay=(id)=>{     
      music[id-1].play()
      console.log(item.id + ' clicked play ')      
    }
    const clickedPause=(id)=>{
      music[id-1].pause();
    console.log(item.id + ' clicked pause ')
    }
    return(
      <div className={classes.songItem} key={item.id}>
                <img src={item.cover} alt={item.id} />
                <span>{item.name}</span>
                <span className={classes.songlistplay}>
                    <span className={classes.timestamp}>
                    05:30
                    <div className={classes.playpause}>
                        <button className={classes.playBtn} onClick={()=>clickedPause(item.id)}><i className="far fa-pause-circle"></i></button>  <button className={classes.playBtn} onClick={()=>clickedPlay(item.id)}>
                      <i className="far fa-play-circle"></i>
                      </button>
                      
                    </div>
                </span>
                </span>
            </div>
    )
  })
  return (
    <div className={classes.songlist}>
    <h1>BEST of NCS - No Copyright Sounds</h1>
    <div>
        <div className={classes.songItemContainer}>
            {mySongs}
        </div>
    </div>
  </div>
  );
}

export default Songlist;
