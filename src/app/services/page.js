import Image from "next/image";
import React from "react";

import img1 from "../../../public/1.jpg";

const Services = () => {
  return (
    <div className="flex flex-col items-center mx-auto text-center my-12">
      <h1 className="mb-5 uppercase">Services</h1>
      <section className="my-10">
        <Image src={img1} alt="" className="h-72 w-4/5 mx-auto" />
        <h1 className="my-8">Tobacco Shop</h1>
        <p>
          At Ignite Vapors Smoke Shop, we believe that every customer gets
          better results when we focus on specific customer needs. This is why
          our smoke shop concentrates on tobacco products and tobacco
          alternatives. There’s a wide variety of nicotine delivery methods,
          each with its own unique character and equipment. From old fashioned
          cigars and pipe tobacco to manufactured cigarettes and hookahs and the
          latest member, electronic cigarettes.
        </p>
      </section>
      <section className="my-10">
        <Image src={img1} alt="" className="h-72 w-4/5 mx-auto" />
        <h1 className="my-8">Tobacco Shop</h1>
        <p>
          At Ignite Vapors Smoke Shop, we believe that every customer gets
          better results when we focus on specific customer needs. This is why
          our smoke shop concentrates on tobacco products and tobacco
          alternatives. There’s a wide variety of nicotine delivery methods,
          each with its own unique character and equipment. From old fashioned
          cigars and pipe tobacco to manufactured cigarettes and hookahs and the
          latest member, electronic cigarettes.
        </p>
      </section>
      <section className="my-10">
        <Image src={img1} alt="" className="h-72 w-4/5 mx-auto" />
        <h1 className="my-8">Tobacco Shop</h1>
        <p>
          At Ignite Vapors Smoke Shop, we believe that every customer gets
          better results when we focus on specific customer needs. This is why
          our smoke shop concentrates on tobacco products and tobacco
          alternatives. There’s a wide variety of nicotine delivery methods,
          each with its own unique character and equipment. From old fashioned
          cigars and pipe tobacco to manufactured cigarettes and hookahs and the
          latest member, electronic cigarettes.
        </p>
      </section>
    </div>
  );
};

export default Services;
