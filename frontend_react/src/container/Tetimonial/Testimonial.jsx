import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import "./Testimonial.scss";
import { NavigationDots } from "../../components";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      <div id="testimonial" className={`app__container app__whitebg`}>
        <div className="app__placeholder"></div>
        <div className="app__wrapper app__flex">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className={`app__testimonial app__flex`}
          >
            {testimonials.length && (
              <>
                <div className="app__testimonial-item app__flex">
                  <img
                    loading="lazy"
                    src={urlFor(testimonials[currentIndex].imgurl)}
                    alt={testimonials[currentIndex].name}
                  />
                  <div className="app__testimonial-content">
                    <p className="p-text">
                      {testimonials[currentIndex].feedback}
                    </p>
                    <div>
                      <div className="bold-text">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="p-text">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="app__testimonial-btns app__flex">
                  <div
                    className="app__flex"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      handleClick(
                        currentIndex === 0
                          ? testimonials.length - 1
                          : currentIndex - 1
                      )
                    }
                  >
                    <HiChevronLeft />
                  </div>

                  <div
                    className="app__flex"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      handleClick(
                        currentIndex === testimonials.length - 1
                          ? 0
                          : currentIndex + 1
                      )
                    }
                  >
                    <HiChevronRight />
                  </div>
                </div>
              </>
            )}

            <div className="app__testimonial-brands app__flex">
              {brands.map((brand) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5, type: "tween" }}
                  key={brand._id}
                >
                  <img
                    loading="lazy"
                    src={urlFor(brand.imgUrl)}
                    alt={brand.name}
                    style={{ width: "130px", height: "fit-content" }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="copyright"></div>
        </div>
        <NavigationDots active="testimonial" />
      </div>
    </>
  );
};

export default Testimonial;
