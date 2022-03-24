import React from 'react';

import Section1 from './Section-1/Section1';
import ServiceOffer from './Section-2/ServiceOffer';

const FeatureService = () => {
  return (
    // feature Section
    <section className=" pb-[10rem] mx-auto mt-[8rem]   w-[55rem]  ">
      <Section1 />
      <ServiceOffer />
    </section>
  );
};

export default FeatureService;
