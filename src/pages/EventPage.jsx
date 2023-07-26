import React from "react";
import EventCard from "../components/Events/EventCard";
import Header from "../components/Layout/Header";

const EventPage = () => {
  return (
    <div>
      <Header activeHeading={4} />
      <EventCard active={true} />
    </div>
  );
};

export default EventPage;
