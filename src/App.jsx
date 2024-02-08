
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./../src/Pages/RegisterPage/RegisterPage";
import Layout from "./Components/Layout";
import IndexPage from "./../src/Pages/IndexPage/IndexPage";
import LoginPage from "./../src/Pages/LoginPage/LoginPage";
import { UserContextProvider } from "./userContext";
import CreatePost from "./Pages/CreatePost/CreatePost";


function App() {
  return (
    <UserContextProvider>
      <div className="app">
        <Routes>

          <Route path='/' element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path='/login' element={
              <LoginPage />
            } />
            <Route path='/register' element={
              <RegisterPage />
            } />

            <Route path="/create" element={<CreatePost/>}/>

          </Route>

        </Routes>
      </div>

    </UserContextProvider>

  );
}

export default App;
