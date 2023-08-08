import { Certification, Navbar, Player, Sidebar } from "./general";
import { AppRouter } from "./router/AppRouter";

export const LiveApp = () => {
  return (
    <div className="grid">
      <Navbar />
      <div className="container-player">
        <Player />
      </div>
 
      <div className="container-router">
        <AppRouter />
        <Certification />
      </div>
      <div className="container-link">
        <Sidebar />
      </div>
        
     
      
    </div>
  )
}
