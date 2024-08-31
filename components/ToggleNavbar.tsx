import React from "react";
import { useTheme } from "next-themes";

const values: {
  name: string;
  path: string;
}[] = [
  {
    name: "Solana",
    path: "501",
  },
  {
    name: "Ethereum",
    path: "60",
  },
];

const ToggleNavbar = ({
  pathTypes,
  setPathTypes,
  activeIndex,
  setActiveIndex,
}: {
  pathTypes: string[];
  setPathTypes: (value: string[]) => void;
  activeIndex: number;
  setActiveIndex: (value: number) => void;
}) => {
  const { theme } = useTheme()

  const handleClick = (path: string, index: number) => {
    if (!pathTypes.find((existingPath) => existingPath === path)) {
      // Not Found => Insert
      setPathTypes([...pathTypes, path]);
    }
    setActiveIndex(index);
  };

  return (
    <div className="flex gap-4 items-center">
      {values.map((val, index) => (
        <p
          key={index}
          className={`${
            activeIndex === index && `border-b ${theme === "light" ? 'border-black' : 'border-white'}`
          } pb-2 cursor-pointer`}
          onClick={() => handleClick(val?.path, index)}
        >
          {val?.name}
        </p>
      ))}
    </div>
  );
};

export default ToggleNavbar;
