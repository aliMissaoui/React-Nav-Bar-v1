import React from "react";

const Menu = () => {
  const clickHandler = (e) => {
    alert(e);
  };
  return (
    <div
      style={{
        paddingTop: "10%",
        paddingBottom: "1000%",
        height: "100%",
        backgroundColor: "black",
        opacity: 1.0,
        textAlign: "center",
        color: "white",
        justifyContent: "left",
      }}
    >
      <h1 style={header} onClick={() => clickHandler("Home")}>
        Home
      </h1>
      <h1 style={header} onClick={() => clickHandler("Services")}>
        Services
      </h1>
      <h1 style={header} onClick={() => clickHandler("Contact")}>
        Contact
      </h1>
      <h1 style={header} onClick={() => clickHandler("About")}>
        About Us
      </h1>
      <h1 style={header} onClick={() => clickHandler("Login")}>
        Log In
      </h1>
      <h1 style={header} onClick={() => clickHandler("Signup")}>
        Sign Up
      </h1>
    </div>
  );
};

const header = {
  paddingBottom: "25px",
  cursor: "pointer",
};

export default Menu;
