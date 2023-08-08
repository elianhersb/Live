import { Route, Routes } from "react-router-dom";
import { ResourcesPage } from "../resources";
import { VideoLibraryPage, VideosPage } from "../videos";
import { ShopPage } from "../shop";
import { AfilliatePage } from "../Affiliate";
import { ProfilePage } from "../profile";

export const AppRouter = () => {
  return (
    <>
      <Routes>

          <Route path="/resourse" element={ 
              <ResourcesPage />
            } 
          />

          <Route path="/tienda" element={ 
              <ShopPage />
            } 
          />

          <Route path="/videos" element={ 
              <VideosPage />
            } 
          />

          <Route path="/perfil" element={ 
              <ProfilePage />
            } 
          />

          <Route path="/videos/:id" element={ 
              <VideoLibraryPage />
            } 
          />

          <Route path="/afiliado" element={ 
              <AfilliatePage />
            } 
          />

          <Route path="/*" element={ 
              <ResourcesPage />
            } 
          />
        
      </Routes>
    </>
  )
}