import React, { useState } from "react";

function NavBar({ user, setUser }) {

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }

    return (
      <nav>
            <button variant="outline" onClick={handleLogoutClick}>
                Logout
            </button>
      </nav>
    );
  }
  
  export default NavBar;
  