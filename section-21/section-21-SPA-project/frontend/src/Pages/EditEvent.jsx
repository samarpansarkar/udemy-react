import { useRouteLoaderData } from "react-router";

import React from "react";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;
  return (
    <div>
      <EventForm method="patch" event={event} />
    </div>
  );
};

export default EditEventPage;
