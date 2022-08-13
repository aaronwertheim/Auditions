import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }

    return (
        <nav class="flex items-center justify-between flex-wrap bg-black text-white p-6">
            
            <div class="flex items-center flex-shrink-0  mr-6">
                <img    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqPyn7GGPgHZw_rjM52BSBt4vhgq_pzQaig&usqp=CAU"
                        class="fill-current h-10 w-10 mr-2 rounded"
                        alt="">
                </img>
                <span class="font-semibold text-xl tracking-tight">{ user.role === "Casting Director" ? "Casting Directors" : "Performers" }</span>
            </div>

            <div class="text-sm lg:flex-grow">
                    {user.role === "Casting Director" ? 
                        <>
                            <Link to="/" class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-500 mr-4">My Castings Calls</Link> 
                            <Link to="/new-show" class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-500 mr-4">Add a Show</Link> 
                        </> :
                        <>
                            <Link to="/" class="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-teal-500">See All Casting Calls</Link>
                            <Link to="/auditions-list" class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-500  mr-4">View My Auditions</Link>
                        </>
                    }   
                    
                    <Link   to="/" 
                            onClick={handleLogoutClick}
                            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                            Logout
                    </Link>
            </div>
            

      </nav>
    );
  }
  
  export default NavBar;
  