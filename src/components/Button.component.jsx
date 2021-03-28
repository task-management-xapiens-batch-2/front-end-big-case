import { Button } from "react-bootstrap";
import React from "react";

const ButtonComponent = ({ variant, title, ...rest }) => {
  switch (variant) {
    case "secondary":
      return (
        <Button
          {...rest}
          className="btn btn-primary mx-2"
          variant="secondary"
          type="submit"
        >
          {title}
        </Button>
      );
    case "danger":
      return (
        <Button
          {...rest}
          className="btn btn-primary mx-2"
          variant="danger"
          type="submit"
        >
          {title}
        </Button>
      );
    case "warning":
      return (
        <Button
          {...rest}
          className="btn btn-primary mx-2"
          variant="warning"
          type="submit"
        >
          {title}
        </Button>
      )
    default:
      return (
        <Button {...rest} className="btn btn-primary mx-2" type="submit">
          {title}
        </Button>
      );
  }
};

export default ButtonComponent;
