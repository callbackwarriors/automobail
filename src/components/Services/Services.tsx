import Title from "components/utilities/Title";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import img from "../../assets/images/car-repair (1).png";

const Services = () => {
  return (
    <section className="latest__courses section-padding">
      <div className="container">
        <Title
          subtitle="What We Do"
          title="Services We Provide"
          description=""
        />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-2 mb-6 transition duration-100 ease-in-out transform xl:w-1/3 md:w-1/2 hover:scale-105">
            <Link to="/">
              <a>
                <div className="p-6 bg-gray-100 rounded-lg">
                  <div className="relative">
                    <img
                      className="object-cover object-center w-full h-40 mb-6 rounded"
                      src={img}
                      alt=""
                    />
                    <AiOutlineHeart className="absolute text-2xl top-3 right-3" />
                  </div>

                  <h4 className="mb-2 text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h4>
                  <p className="text-base leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem, facere explicabo? Aliquam officia aut fuga dolorum
                    voluptates architecto molestias tempora placeat cupiditate
                    assumenda, ipsam aliquid praesentium vero! Nostrum sunt
                    repudiandae ipsum asperiores eum dolore hic, temporibus
                    cumque explicabo nam doloribus quas animi, officiis deserunt
                    praesentium, quidem suscipit rem sit quam.
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div className="w-full px-2 mb-6 transition duration-100 ease-in-out transform xl:w-1/3 md:w-1/2 hover:scale-105">
            <Link to="/">
              <a>
                <div className="p-6 bg-gray-100 rounded-lg">
                  <div className="relative">
                    <img
                      className="object-cover object-center w-full h-40 mb-6 rounded"
                      src={img}
                      alt=""
                    />
                    <AiOutlineHeart className="absolute text-2xl top-3 right-3" />
                  </div>

                  <h4 className="mb-2 text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h4>
                  <p className="text-base leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem, facere explicabo? Aliquam officia aut fuga dolorum
                    voluptates architecto molestias tempora placeat cupiditate
                    assumenda, ipsam aliquid praesentium vero! Nostrum sunt
                    repudiandae ipsum asperiores eum dolore hic, temporibus
                    cumque explicabo nam doloribus quas animi, officiis deserunt
                    praesentium, quidem suscipit rem sit quam.
                  </p>
                </div>
              </a>
            </Link>
          </div>
          <div className="w-full px-2 mb-6 transition duration-100 ease-in-out transform xl:w-1/3 md:w-1/2 hover:scale-105">
            <Link to="/">
              <a>
                <div className="p-6 bg-gray-100 rounded-lg">
                  <div className="relative">
                    <img
                      className="object-cover object-center w-full h-40 mb-6 rounded"
                      src={img}
                      alt=""
                    />
                    <AiOutlineHeart className="absolute text-2xl top-3 right-3" />
                  </div>

                  <h4 className="mb-2 text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h4>
                  <p className="text-base leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem, facere explicabo? Aliquam officia aut fuga dolorum
                    voluptates architecto molestias tempora placeat cupiditate
                    assumenda, ipsam aliquid praesentium vero! Nostrum sunt
                    repudiandae ipsum asperiores eum dolore hic, temporibus
                    cumque explicabo nam doloribus quas animi, officiis deserunt
                    praesentium, quidem suscipit rem sit quam.
                  </p>
                </div>
              </a>
            </Link>
          </div>
          {/* {data?.slice(0, 3).map((course) => (
            <LatestCourse key={course.title} course={course}></LatestCourse>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Services;
