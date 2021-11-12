import useAsync from "hooks/useAsync";
import React, { useCallback } from "react";
import { useParams } from "react-router";
import carService from "services/carService";
import { IService } from "type";

interface IParams {
  id: string;
}

const ServiceDetails = () => {
  const { id } = useParams<IParams>();
  const getService = useCallback(() => {
    return carService.getServiceByID(id);
  }, [id]);

  const { data, isLoading, isSuccess } = useAsync<IService>(getService);
  console.log("data", data);

  const { title, img, desc, price } = (data || {}) as IService;

  return (
    <div>
      <div className="container mx-auto">
        {isLoading && <h3>Loading ....</h3>}
        {isSuccess && <div>{title}</div>}
      </div>
    </div>
  );
};

export default ServiceDetails;
