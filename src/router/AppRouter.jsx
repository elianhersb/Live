import { Route, Routes } from "react-router-dom";
import { ResourcesPage } from "../resources";

export const AppRouter = () => {
  return (
    <>
      <Routes>

          <Route path="/*" element={ 
              <ResourcesPage />
            } 
          />
        
      </Routes>
    </>
  )
}