import React from "react";

import "../styles/main.scss";

export default ({ children, className }) => (
  <div className={className}>{children}</div>
);
