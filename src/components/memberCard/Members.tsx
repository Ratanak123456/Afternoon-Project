import { Link } from "react-router";
import type { TeamMember } from "../../types/TeamMember";
import { FaGithub } from "react-icons/fa";

export default function Members({ id, name, role, image, github }: TeamMember) {
  return (
          <div
            key={id}
            className="bg-[var(--color-bg)] rounded-lg p-6 hover:shadow-md transition duration-300 border border-[var(--color-border)]"
          >
            <div className="flex items-center space-x-4">
              <img
                src={image}
                alt={name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-[var(--color-text)]">
                  {name}
                </h3>
                <p className="text-[var(--color-subtext)] text-sm mb-2">
                  {role}
                </p>
                <div className="flex space-x-3">
                  <Link
                    to={github}
                    className="text-[var(--color-subtext)] hover:text-[var(--color-text)] transition duration-300"
                  >
                    <FaGithub />
                  </Link>
                </div>
              </div>
            </div>
          </div>
  );
}
