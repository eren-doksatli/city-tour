import React, { useState } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../tourData";

const TourList = () => {
  const [tours, setTours] = useState(tourData);

  const removeTour = (id) => {
    console.log(id);
    const updatedTours = tours.filter((tour) => tour.id !== id);

    setTours(updatedTours);
  };
  return (
    <section className="tourlist">
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </section>
  );
};

export default TourList;
