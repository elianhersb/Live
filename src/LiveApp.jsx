import { Certification, Linkbar, Navbar, Sidebar, Video } from "./general";
import { AppRouter } from "./router/AppRouter";

export const LiveApp = () => {
  return (
    <div className="grid">
      <div>
        <Navbar />
        <Video />
        <Linkbar />
      </div>
      <div className="col-content">
        <AppRouter />
        <Certification />
      </div>
      <Sidebar />
    </div>
  )
}
