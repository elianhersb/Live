export const VideoItem = ({ title, status, time}) => {
  return (
    <div className="video-item">
        <img className="icon" src="/assets/icon/play.svg" alt={status} />
        <div className="video-content">

            <div className="video-title">
                {title}
            </div>
            <div className="video-time">
                {time} min
            </div>
        </div>
        
    </div>
  )
}
