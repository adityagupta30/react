 import React from 'react'
 import {Container,Logo,LogoutBtn} from '../index'
 import { Link } from 'react-router-dom'
 import { useSelector } from 'react-redux'
 import { useNavigate } from 'react-router-dom'
 function Header() {
    const authStatus= useSelector((state)=>state.auth.status)
    const navigate = useNavigate()
    const navitems=[
        {
            name:'Home',
            slug:"/",
            active:true
        },
        {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
    ]
    return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b">
        <Container>
           <nav className="flex items-center justify-between py-4">
                <div className='mr-4'>
                    <Link to='/'>
                    <Logo width='70px '/>
                    </Link>
             </div>
             <ul className='flex ml-auto'>
                {navitems.map((item)=>
                    item.active ?(
                        <li key ={item.name}>
                            <button
                            onClick={()=>navigate(item.slug)}
                           className="px-5 py-2 rounded-lg font-medium text-gray-700 hover:bg-blue-600
                            hover:text-white transition-all duration-300"
                            >{item.name}</button>

                        </li>
                    ): null
                )}
                {authStatus && (
                    <li>
                       <LogoutBtn />
                    </li>
                )}

             </ul>
            </nav>
        </Container>
     </header>
    )
 }
 
 export default Header
 