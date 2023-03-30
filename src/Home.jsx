import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Resources from "./Resources";
import Contact from "./Contact";

const Home = () => {
  const data = {
    name:"Welcome",
    image: "./images/hero.svg",
    text: "Hi there :) This is a crime map system.",
  }
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection {...data} />
      <Resources />
      <Contact />
    </>
  );
};


export default Home;
