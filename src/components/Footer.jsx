import React from "react";

function Footer(){

    const DATE = new Date();
    const CURRENTYEAR = DATE.getFullYear();

    return <footer><p>Copyrigth &copy; {CURRENTYEAR}</p></footer>;
}

export default Footer;