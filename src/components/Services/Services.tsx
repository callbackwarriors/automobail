/* eslint-disable jsx-a11y/anchor-is-valid */
import Service from "components/Service/Service";
import useAsync from "hooks/useAsync";
import React from "react";
import { MdTrendingFlat } from "react-icons/md";
import carService from "services/carService";
import { IService } from "type";

const Services = () => {
  const { data, isLoading } = useAsync(carService.getServices);

  return (
    <section className=" section-padding">
      <div className="container mx-auto mb-6 text-center">
        <p>What We Do</p>
        <h2 className="text-4xl font-bold">Services We Provide</h2>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap">{isLoading && "Loading..."}</div>
        {!isLoading && (
          <div className="flex flex-wrap">
            {data?.slice(0, 3).map((service: IService) => (
              <Service key={service._id} service={service} />
            ))}
          </div>
        )}
        <button className="flex items-center p-3 font-semibold bg-blue-900 rounded-md text-blue-50 menu-list-item hover:bg-blue-700">
          View All Service <MdTrendingFlat className="ml-2 text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default Services;
