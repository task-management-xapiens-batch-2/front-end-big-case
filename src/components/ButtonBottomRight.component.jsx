import { Button } from "react-bootstrap";
import React from "react";
import { HiUserAdd } from "react-icons/hi";

const ButtonBottomRight = () => {
  return (
    <>
      <Button
        variant="primary"
        className="d-flex justify-content-center p-3 rounded-circle"
        style={{ position: "fixed", bottom: "2.5rem", right: "1rem", fontSize: "2rem" }}
      >
        <HiUserAdd />
      </Button>
    </>
  );
};

export default ButtonBottomRight;
