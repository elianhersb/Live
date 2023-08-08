import { VideoItem } from "../VideoItem/VideoItem";

export const Category = ({ title, items }) => {

  const list = items.map( item => <VideoItem key={item.id} {...item} />);
  return (
    <div className="category">
        <div className="category-title">
            { title }
        </div>

        { list }
    </div>
  )
}
