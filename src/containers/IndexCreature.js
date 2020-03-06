import React, { useState, useEffect } from "react";
import fetchData from "../functions/fetchData";
import AllCreaturesTile from "../components/AllCreaturesTile";

const IndexCreature = props => {
  const [creatures, setCreatures] = useState([]);
  const byType = props.match.params.type;
  const apiEndpoint = `/api/v1/adoptable/${byType}`;
  const fetchCreatures = () => fetchData(apiEndpoint, setCreatures);
  useEffect(fetchCreatures, []);

  const mapCreatures = creatures.map(creature => (
    <AllCreaturesTile
      key={creature.id}
      imgUrl={creature.img_url}
      name={creature.name}
      age={creature.age}
      vacStatus={creature.vaccination_status}
      type={creature.type_of_creature}
      creatureId={creature.id}
    />
  ));
  return (
    <>
      <h3 className="text-center">Find the {byType} of your dreams!</h3>
      <div className="row small-up-1 medium-up-2 large-up-3">
        {mapCreatures}
      </div>
    </>
  );
};

export default IndexCreature;
