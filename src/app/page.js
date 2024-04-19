"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import AreYou from "./components/AreYou";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LawyerCoach from "./components/LawyerCoach";
import MindSet from "./components/MindSet";
import OurClient from "./components/OurClient";
import Preloader from "./components/Preloader";
import Request from "./components/Request";
import TagetGroup from "./components/TagetGroup";
import WhatYou from "./components/WhatYou";
import YourFault from "./components/YourFault";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <Header />
      <YourFault />
      <WhatYou />
      <TagetGroup />
      <MindSet />
      <AreYou />
      <LawyerCoach />
      <OurClient />
      <Request />
      <Footer />
      <BackToTop />
      <Preloader />
    </>
  );
}
