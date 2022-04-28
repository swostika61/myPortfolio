import React from "react";
interface splitProps {
  copy: string;
  role: string;
}
const SplitText: React.FC<splitProps> = ({ copy, role }) => {
  return (
    <span aria-label={copy} role={role}>
      {copy.split("").map(function (char, index) {
        let style = { animationDelay: 0.5 + index / 10 + "s" };

        return (
          <span aria-hidden="true" key={index} style={style}>
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default SplitText;
