// import ReactPlayer from "react-player/youtube";
import classes from '../styles/MiniPlayer.module.css';

export default function MiniPlayer() {
  return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
      <span className={`material-icons-outlined ${classes.open}`}>
        {' '}
        play_circle_filled{' '}
      </span>
      <span className={`material-icons-outlined ${classes.close}`}>
        {' '}
        close{' '}
      </span>
      {/* <ReactPlayer
        className={classes.player}
        width="300px"
        height="168px"
        playing={status}
        controls
      /> */}
      <p>title</p>
    </div>
  );
}
