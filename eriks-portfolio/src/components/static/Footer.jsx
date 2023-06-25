import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="/" target="_blank">
          <BsGithub fontSize={22} />
        </a>
        <a href="/" target="_blank">
          <BsLinkedin fontSize={22} />
        </a>
        <a href="/" target="_blank">
          <BsTwitter fontSize={22} />
        </a>
      </div>
    </footer>
  );
}
