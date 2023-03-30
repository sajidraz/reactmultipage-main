import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";

const About = () => {
  const data = {
    name:"About Crime Map",
    image: "./images/about1.svg",
    text: "The aim of this crime map system is to help make cities and communites safer.",
  };
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);

  return <HeroSection {...data} />;
};


export default About;
