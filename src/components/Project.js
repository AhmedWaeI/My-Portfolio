import "./Project.css";
function Project(props) {
  return (
    <div className="team_member">
      <div className="team_img">
        <img src={props.img} alt="Project img" />
      </div>
      <h3>{props.title}</h3>
      <p className="role">
        <ul>
          <li>
            <a
              href={props.github}
              title="Link Effect"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </p>
      <p>{props.info}</p>
    </div>
  );
}
export default Project;
