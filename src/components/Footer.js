import { FaLinkedin , FaGithub} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="py-4 bg-secondary text-center text-white">
      <div className="flex justify-center space-x-6 mb-2">
         <a
          href="https://www.linkedin.com/in/s-rakshana-089a66238/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a> 
        <a
          href="https://github.com/Rakshana77"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
      
      </div>
      <p>&copy; 2024</p>
    </div>
  );
}
