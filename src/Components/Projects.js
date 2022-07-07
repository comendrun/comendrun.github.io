import React, { useState } from "react";
import Project from "./Project";
import { useFetch } from "../hooks/useFetch";
import { nanoid } from "nanoid";
// import { Link } from "react-router-dom";

export default function Projects() {
  const [url, setUrl] = useState("http://localhost:3000/projects/");
  const { data, isPending, error } = useFetch(url);

  const mappingThroughProjects = () => {
    if (data) {
      const orderedByLatestFirst = data.sort((a, b) =>
        a.id > b.id ? -1 : 1
      );
      return orderedByLatestFirst.map((project) => {
        return (
          <Project
            key={nanoid()}
            name={project.title}
            id={project.id}
            live={project.links.live}
            about={project.about}
            mobImage={project.images.mobile}
            linkTo={`/projects/${project.id}`}
            icons={project.tech.map((each) => {
              return (
                <i
                  title={each.name}
                  key={nanoid()}
                  className={each.display}
                ></i>
              );
            })}
          />
        );
      });
    }
  };

  return (
    <div className="portfolio">
      {error && <p>{error}</p>}
      {isPending && <p>Loading ...</p>}
      {mappingThroughProjects()}
    </div>
  );
}
