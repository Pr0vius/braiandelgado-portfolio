import { FaLinkedin, FaEnvelope, FaGooglePlusG } from "react-icons/fa";

import HtmlLogo from "../Components/Logos/Html";
import Css from "../Components/Logos/Css";
import Javascript from "../Components/Logos/Javascript";
import ReactJs from "../Components/Logos/React";
import Nodejs from "../Components/Logos/Nodejs";
import Express from "../Components/Logos/Express";

const data = {
  name: "Braian Delgado",
  lang: {
    en: {
      Hero: {
        id: "#",
        title: "Home",
        greeting: "Hello, I'm",
        career: "FullStack Developer",
        cvBtn: "Download CV",
      },
      About: {
        id: "about",
        title: "About Me",
        subtitle: "My info",
        img: "/src/assets/img/1616855391242.jpeg",
        description:
          "I'm a self-taught full stack web developer who is passionate about learning about technology and programming.",
        technologies: [
          { title: "HTML 5", logo: HtmlLogo },
          { title: "CSS 3", logo: Css },
          { title: "Javascript", logo: Javascript },
          { title: "React", logo: ReactJs },
          { title: "Nodejs", logo: Nodejs },
          { title: "Express", logo: Express },
        ],
        contactBtn: "Contact Me",
      },
      Experience: {
        id: "experience",
        title: "Experience",
        subtitle: "My skills",
        cards: [
          {
            icon: "/src/assets/AkumaOnlyLogo.svg",
            title: "Akuma Software",
            charge: "Freelancer",
            res: [
              "Client Development",
              "Server Development",
              "Host Maintenance",
            ],
            link: "https://akumasoftware.com",
          },
        ],
      },
      Portfolio: {
        id: "portfolio",
        title: "Portfolio",
        subtitle: "My lastest works",
        projects: [
          {
            title: "Akuma Software",
            link: "https://akumasoftware.com",
            repository: "https://github.com/Pr0vius/akuma",
            thumbnail: "/src/assets/thumbnails/as-thumbnail.png",
          },
          {
            title: "Castro Barros 973",
            link: "https://castrobarros973.com.ar",
            repository: "https://github.com/Pr0vius/castrobarros973",
            thumbnail: "/src/assets/thumbnails/cb973-thumbnail.png",
          },
          {
            title: "Practice/ Hotely API",
            link: "https://no-country-g66-hotely.web.app/",
            repository: "https://github.com/No-Country/c3-g66-t-backend",
            thumbnail: "/src/assets/thumbnails/hotely-thumbnail.png",
          },
        ],
      },
      Contact: {
        id: "contact",
        title: "Contact Me",
        subtitle: "Get in touch",
        means: [
          {
            name: "Linkedin",
            icon: FaLinkedin,
            url: "https://www.linkedin.com/in/braiandelgado/",
          },
          {
            name: "E-mail",
            icon: FaEnvelope,
            url: "mailto:braiandelgado4255@hotmail.com",
          },
          {
            name: "Gmail",
            icon: FaGooglePlusG,
            url: "mailto:braiandelgado4255@gmail.com",
          },
        ],
      },
    },
  },
};

export default data;
