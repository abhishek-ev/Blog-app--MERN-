import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
import { useContext, useState } from "react";
import { UserContext } from "../contex/UserContex";

function Navbar() {
  const [menu, setmenu] = useState(false)
  const [prompt, setPrompt] = useState("")
  console.log(prompt)
  const navigate = useNavigate()
  const path=useLocation().pathname
  // console.log(path)

  const showMenu =async() => {
    setmenu(!menu);
  };
  // const user(false)
  const { user } = useContext(UserContext)
  // console.log(user)
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-6 ">
      <h1 className="md:text-xl text-lg  font-extrabold"><Link to='/'>Blog.live</Link></h1>
      {path ==="/" && <div className="flex justify-center items-center space-x-0">
        <p onClick={() => navigate(prompt ? "?search=" + prompt : navigate("/"))} className="cursor-pointer"><BiSearch /></p>
        <input onChange={(e) => setPrompt(e.target.value)} className="outline-none px-3" placeholder="search a post" type="text" />
      </div>}
      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
        {user ? (<h3 className="font-bold"><Link to='/write'>write</Link></h3>) : (<h3 className="font-bold"><Link to='/login'>Login</Link></h3>)}
        {user ? (<div onClick={showMenu}>
          <p className="cursor-pointer relative"><FaBars /></p>
          {menu && <Menu />}
        </div>) : (<h3 className="font-bold"><Link to='/register'>Register</Link></h3>)}
      </div>
      <div className="md:hidden text-lg" onClick={showMenu}>
        <p className="cursor-pointer relative">
          <FaBars />
        </p>
        {menu && <Menu />}
      </div>
    </div>
  )
}

export default Navbar