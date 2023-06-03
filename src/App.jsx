import { Route, Routes } from "react-router-dom";
import LayoutOnlyHeader from "./Layout/LayoutOnlyHeader";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import ManageUserPage from "./pages/ManageUserPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route path='/sign-up' element={<SignUpPage></SignUpPage>}></Route>
      <Route path='/sign-in' element={<SignInPage></SignInPage>}></Route>

      <Route element={<LayoutOnlyHeader></LayoutOnlyHeader>}>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/blog' element={<BlogPage></BlogPage>}></Route>
        <Route
          path='/admin'
          element={
            <PrivateRoutes>
              <ManageUserPage></ManageUserPage>
            </PrivateRoutes>
          }
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
