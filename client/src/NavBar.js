import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function NavBar({ user, setUser }) {


    const history = useHistory();
    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }

    // function handleClick() {
    //     fetch(`/user/${user.id}/`, {
    //         method: "PATCH",
    //         headers:{
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             unread: 0
    //         }),
    //     }).then((r) => {
    //       if(r.ok) {
    //           history.go(0)
    //                   }
    //               })
    // }
    

    return (
        <nav class="flex items-center justify-between flex-wrap bg-black text-white p-6 font-semibold">
            <div class="flex items-center flex-shrink-0  ">
                <img    
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqPyn7GGPgHZw_rjM52BSBt4vhgq_pzQaig&usqp=CAU"
                  class="fill-current h-12 w-12 mr-12 ml-6 rounded "
                  alt="">
                </img>
            </div>

            <div class="text-sm lg:flex-grow">
                    {user.role === "Casting Director" ? 
                        <>
                            <Link to="/" class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-500 mr-6">My Castings Calls</Link> 
                            <Link to="/new-show" class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-500 mr-6">Add a Show</Link> 
                        </> :
                        <>
                            <Link to="/" class="block mt-4 lg:inline-block lg:mt-0 mr-6 hover:text-teal-500">See All Casting Calls</Link>
                            <Link to="/auditions-list" class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-500  mr-6">View My Auditions</Link>
                        </>
                    }   
                    <Link to="/messages-list"  class="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-500  mr-6">{"Messages (" + user.unread + " unread)"}</Link>
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
  