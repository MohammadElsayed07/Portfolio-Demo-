import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
const socials = [
    {
      icon: faEnvelope,
      url: "mailto:mohammad.elsayed.07@gmail.com",
    },
    {
      icon: faGithub,
      url: "https://github.com/MohammadElsayed07",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/mohammad-elsayed-mohammad/",
    },
    {
        icon: faStackOverflow,
        url: "https://stackoverflow.com",
    },
  ];

const Header = () => {
    const handleLinkClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };
    
      const socialLinks = socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleLinkClick(social.url)}
        >
          <FontAwesomeIcon icon={social.icon} size="2x" spacing={8}/>
        </a>
      ));
    
      return (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          translateY={0}
          transitionProperty="transform"
          transitionDuration=".3s"
          transitionTimingFunction="ease-in-out"
          backgroundColor="#18181b" 
          opacity={0.9}
        >
          <Box color="white" maxWidth="1280px" margin="0 auto">
            <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
              <nav> <HStack spacing={8}>{socialLinks}</HStack></nav>
              <nav>
              <HStack spacing={8}>
              <a
                href="#landing-section"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("landing-section");
                }}
              >
                Home
              </a>
              <a
                href="#projects-section"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("projects-section");
                }}
              >
                Projects
              </a>
              <a
                href="#contactme-section"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("contactme-section");
                }}
              >
                Contact Me
              </a>
                </HStack>
              </nav>
            </HStack>
          </Box>
        </Box>
      );
};

export default Header;