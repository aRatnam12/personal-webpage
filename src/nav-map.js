// @flow
import uberLogo from "./static/uber_logo.jpg";
import trunkClubLogo from "./static/trunk_club_logo.png";
import otcrLogo from "./static/otcr_logo.png";
import personalPhoto from "./static/personal_photo.png";

const navMap = {
  Me: {
    imgSrc: personalPhoto,
    descriptions: [
      "Hi! My name is Ansh and I'm currently working as a software engineer at Uber. I graduated from the University of Illinois studying computer science in May 2017, and have lived in SF since.",
      "In my free time, I enjoy playing guitar, practicing krav maga, reading, watching movies, and spending time with friends and family."
    ]
  },
  Uber: {
    imgSrc: uberLogo,
    descriptions: [
      "I have been working full-time at Uber on the Studio team for over a year. The Studio team makes internal simulation tools that are widely used across Uber's engineering org. I work full-stack with a focus on front-end web development.",
      "I have also done two internships at Uber. My first internship was on the Uber for Business team in 2015. My project was to build a new dashboard for admins at organizations who participated in the U4B program to manage the employees with access to the program.",
      "My second internship at Uber was on the uberPOOL team in 2016. My project was to improve the process/tooling around launching POOL in a new city."
    ]
  },
  "Trunk Club": {
    imgSrc: trunkClubLogo,
    descriptions: [
      "My first ever internship was in 2014 after my freshman year of college, at Trunk Club. My project was to build the referral system to increase the number of users",
      "One of the coolest parts of my summer at Trunk Club was being there when it was acquired by Nordstrom for $350m."
    ]
  },
  "OTCR Consulting": {
    imgSrc: otcrLogo,
    descriptions: [
      "During college, I worked at OTCR, a student-run consulting firm that helped a range of companies from local small businesses to some fortune 500 companies."
    ]
  }
};

export type NavItem = $Keys<typeof navMap>;

export default navMap;
