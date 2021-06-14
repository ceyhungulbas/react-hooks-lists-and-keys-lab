import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  let emptyArr = links.map(link => <a key = {link} href={"#" + link}>{link}</a>)
  




  return (
  <nav>
    {emptyArr}
    {/* display an <a> tag for each link here */}
  </nav>
  );
}

export default NavBar;
