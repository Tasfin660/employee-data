// REACT ICONS
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-emerald-500 py-10 text-white">
      <p className="text-follow mb-4 text-xl font-medium tracking-wider">
        Follow Me
      </p>
      <ul className="flex items-center gap-4 text-xl">
        <li className="outer-glow">
          <a target="_blank" href="https://github.com/Tasfin660">
            <FaGithub />
          </a>
        </li>
        <li className="outer-glow">
          <a target="_blank" href="#">
            <FaLinkedin />
          </a>
        </li>
        <li className="outer-glow">
          <a
            target="_blank"
            href="https://discord.com/users/513693207880663040"
          >
            <FaDiscord />
          </a>
        </li>
        <li className="outer-glow">
          <a target="_blank" href="https://www.facebook.com/Tasfin660/">
            <FaFacebook />
          </a>
        </li>
        <li className="outer-glow">
          <a target="_blank" href="#">
            <FaXTwitter />
          </a>
        </li>
      </ul>
      <p className="mt-8">
        Copyright &copy; Tasfin Hasan | The Employee Data Website 2024. All
        Rights Reserved
      </p>
    </footer>
  );
}
