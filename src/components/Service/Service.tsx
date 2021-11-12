/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { IService } from "type";

interface IProp {
  service: IService;
}

const Service = ({ service }: IProp) => {
  console.log("service", service);

  return (
    <>
      <div className="w-full px-2 mb-6 transition duration-100 ease-in-out transform xl:w-1/3 md:w-1/2 hover:scale-105">
        <Link to="/">
          <a>
            <div className="p-6 bg-gray-100 rounded-lg">
              <div>
                <img
                  className="object-cover object-center w-full h-40 mb-6 rounded"
                  src={service.img}
                  alt=""
                />
              </div>
              <h4 className="mb-2 text-2xl font-bold">{service.title}</h4>
              <p>${service.price}</p>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Service;
