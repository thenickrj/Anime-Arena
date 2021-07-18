import React from "react";
import { motion } from "framer-motion";

function Animation() {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <motion.div
      className="block"
      onClick={() => setIsActive(!isActive)}
      animate={{
        rotate: isActive ? 180 : 360,
      }}
    >
      Hello Nikhil Singh!!
    </motion.div>
  );
}

export default Animation;
