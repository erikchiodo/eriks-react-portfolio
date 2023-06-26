// TODO: Ensure react icons works
// TODO: Link Footer with pages. Footer should be linked to each page (About, Contact, Portfolio, Resume)

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
