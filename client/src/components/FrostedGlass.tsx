import React from "react";
import ProjectLogo from "../assets/svgs/ProjectLogo";

interface FrostedGlassProps {
  children: React.ReactNode;
}

function FrostedGlass({ children }: FrostedGlassProps) {
  return (
    <div className="frosted-glass">
      <div className="divider">
        <ProjectLogo />
      </div>
      {children}
    </div>
  );
}

export default FrostedGlass;
