import React from 'react';
import './Home.scss';
import HomeBanner from './HomeBanner/HomeBanner';
import WebsiteBuilder from './WebsiteBuilder/WebsiteBuilder';
import BusinessWebsite from './BusinessWebsite/BusinessWebsite';
import OurMission from './OurMission/OurMission';
import TestimonialSec from './TestimonialSec/TestimonialSec';
import TryAiBuildr from './TryAiBuildr/TryAiBuildr';
const Home = () => {
  return (
    <>
      <div className="home_Page">
        <HomeBanner />
        <WebsiteBuilder />
        <BusinessWebsite />
        <OurMission />
        <TestimonialSec />
        <TryAiBuildr />
      </div>
    </>
  );
};

export default Home;
