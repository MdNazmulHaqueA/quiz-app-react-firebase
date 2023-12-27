/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import classes from '../styles/MiniPlayer.module.css';

export default function MiniPlayer({ title, id }) {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  // const videoUrl = `https://www.youtube.com/watch?v=${id}`;
  // Fixed problem -> Failed to execute 'postMessage' on 'DOMWindow': The target origin provided ('https://www.youtube.com') does not match the recipient window's origin ('http://localhost:5173').
  const videoUrl = 'https://www.youtube.com/watch?v=/' + id + '?showinfo=0&enablejsapi=1&origin=http://localhost:5173';

  function toggleMiniPlayer() {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }
  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        {' '}
        play_circle_filled{' '}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleMiniPlayer}
      >
        {' '}
        close{' '}
      </span>
      <ReactPlayer
        className={classes.player}
        url={videoUrl}
        width="300px"
        height="168px"
        playing={status}
        controls
      />
      <p>{title}</p>
    </div>
  );
}

// Toggle tooltip-ke to amra jsut toggler hishebe show heith kore dite pari jemo onMouseOver setTooltip(t=>!t) & display block && onMouseOut setTooltip(t=>!t) & display none