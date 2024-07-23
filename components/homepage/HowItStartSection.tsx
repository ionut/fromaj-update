import Image from "next/image";
import React from "react";

const HowItStartSection = () => {
  return (
    <section className="section about text-center" data-page="about" id="about">
      <div className="container">
        <div className="about-content">
          <p className="label-2 section-subtitle" id="about-label">
            Fromaj - Povestea noastră
          </p>

          <h2 className="headline-1 section-title">Cum a inceput totul</h2>

          <p className="section-text">
            Fromaj a luat naștere din pasiunea pentru gusturi elegante, arome
            îmbibate în vin și miresme puternice. Din dorința de a oferi tonul
            de unicitate evenimentelor de mare însemnătate, fie că e zi de
            naștere, botez sau nuntă, Fromaj vrea să fie alături de tine. Vom fi
            motivul în plus pentru care invitații tăi vor rămâne cu amintiri
            încântătoare din acea zi.
          </p>
        </div>

        <figure className="about-banner">
          <Image
            src="/images/about-banner.jpg"
            width="570"
            height="570"
            loading="lazy"
            alt="about banner"
            className="w-100"
          />

          <div className="abs-img abs-img-1 has-before">
            <Image
              src="/images/about-abs-image.jpg"
              width="285"
              height="285"
              loading="lazy"
              alt=""
              className="w-100"
            />
          </div>

          <div className="abs-img abs-img-2 has-before">
            <Image
              src="/images/badge-2.png"
              width="133"
              height="134"
              loading="lazy"
              alt=""
            />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default HowItStartSection;
