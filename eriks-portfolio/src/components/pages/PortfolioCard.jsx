import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

export default function PortfolioCard({
  title,
  description,
  gitHubLink,
  deployedApp,
  image,
}) {
  return (
    <div>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <a href={gitHubLink} target="_blank" rel="noreferrer">
            <BsGithub fontSize={20} />
          </a>
          <a href={deployedApp} target="_blank" rel="noreferrer">
            <BiLinkExternal fontSize={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
