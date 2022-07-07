import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./ProjectPage.css";
import { nanoid } from "nanoid";

export default function ProjectPage() {
  const { id } = useParams();
  const url = "http://localhost:3000/projects/" + id;
  const { data: project, isPending, error } = useFetch(url);
  const history = useHistory();

  const image = (device) => {
    try {
      return require(`../../Assets/Project Images/${project.title}-${device}.png`);
    } catch (err) {
      console.log(err);
      return "no image found";
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error, history]);

  return (
    <div className="portfolio-item-individual">
      {isPending && <div>Loading ...</div>}
      {error && (
        <div className="project-page-error-message">
          <h2>
            <i class="fa-solid fa-bomb"></i> {" "} {error} {" "}
            <i class="fa-solid fa-circle-exclamation"> </i>
          </h2>
        </div>
      )}
      {project && (
        <div className="portfolio-item-individual__details-container">
          <h2>{project.title}</h2>
          <div className="project-page-images-container">
            {/* <img src={image('desktop')} alt="" className="project-page-project-image" /> */}

            <img
              src={image("mobile")}
              alt=""
              className="project-page-project-image"
            />
          </div>
          <div className="links-container">
            <a
              title="Github"
              href={project.links.github}
              className="project-page-project-links"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              title="Live Website"
              href={project.links.live}
              className="project-page-project-links"
            >
              <i class="fa-solid fa-eye"></i>
            </a>
          </div>
          <div className="description-container">
            <h4>{id}</h4>
            <img src="img/portfolio-details.jpg" alt="" />
            <p>{project.about}</p>

            <div className="project-page-tech-icons-container">
              {project.tech.map((each) => {
                return (
                  <i
                    title={each.name}
                    key={nanoid()}
                    className={each.display}
                  ></i>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
