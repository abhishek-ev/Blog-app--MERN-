
import {Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import PostDetails from "./Pages/PostDetails"
import CreatePost from "./Pages/CreatePost"
import EditPost from "./Pages/EditPost"
import Profile from "./Pages/Profile"
import { UserContextProvider } from "./contex/UserContex"
import MyBlogs from "./Pages/myBlogs"

function App() {
  return (
    <div>
    <UserContextProvider>
    <Routes>
      <Route exact path="/" element={<><Home/></>}></Route>
      <Route exact path="/login" element={<><Login/></>}></Route>
      <Route exact path="/register" element={<><Register/></>}></Route>
      <Route exact path="/write" element={<><CreatePost/></>}></Route>
      <Route exact path="/posts/post/:id" element={<><PostDetails/></>}></Route>
      <Route exact path="/edit/:id" element={<><EditPost/></>}></Route>
      <Route exact path="/profile/:id" element={<><Profile/></>}></Route>
      <Route exact path="/myblogs/:id" element={<><MyBlogs/></>}></Route>

    </Routes>
    </UserContextProvider>
    </div>
  )
}

export default App
