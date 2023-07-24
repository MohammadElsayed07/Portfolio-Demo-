import './App.css';
import React from "react";
import Header from "./components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import LandingSection from './components/LandingSection';
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <LandingSection />
      <ProjectsSection />
      <ContactMeSection />
    </ChakraProvider>
  );
}

export default App;
