import { Progressbar } from "./Pogressbar/Progressbar"
import { Link } from 'react-router-dom'

export const Lesson = ({ status, name, progress, active, id }) => {
  const bar  = (status == 'PAUSED') && <Progressbar progress={ progress } />;
  const mute  = (status == 'PAUSED') && <img className="icon" src="/assets/icon/mute.svg" alt="mute"/>;
 
  return (
    <Link to={`/videos/${id}`} className={ active ? 'lesson active' : 'lesson'}>
      <div className="container-status">
        <img className="icon" src="/assets/icon/play.svg" alt="play"/>
      </div>
      <div className="conatiner-info">
        <div className="label">
          { name }
        </div>

        { bar }
      </div>
      <div className="container-mute">

        { mute }
      </div>
    </Link>
  )
}
