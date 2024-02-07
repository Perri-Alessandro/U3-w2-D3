import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const MyFooter = () => {
  const [scriptResult, setScriptResult] = useState("");

  const mobileStyles = {
    fontSize: "0.55em",
  };

  const desktopStyles = {
    fontSize: "0.8em",
  };

  const mobileBottomStyles = {
    fontSize: "0.5em",
  };

  const desktopBottomStyles = {
    fontSize: "0.7em",
  };

  useEffect(() => {
    let annoCorrente = new Date().getFullYear();
    let eccolo =
      "©" +
      "1997-" +
      annoCorrente +
      " Netflix. All rights reserved. Created by Perri Alessandro";

    setScriptResult(eccolo);
  }, []);

  return (
    <footer className="container-fluid bg-dark text-secondary mt-5">
      <div
        className="row justify-content-between mt-2"
        style={{
          fontSize:
            window.innerWidth < 768
              ? mobileStyles.fontSize
              : desktopStyles.fontSize,
        }}
      >
        <div className="col">
          <Row>
            <Col>
              <FaFacebook className=" footer-icon me-2" />
              <FaInstagram className="footer-icon me-2" />
              <FaTwitter className="footer-icon me-2" />
              <FaYoutube className="footer-icon" />
            </Col>
          </Row>

          <div className="row flex-column">
            <div className="col mt-2 ">Audio and Subtitles</div>
            <div className="col">Media Center</div>
            <div className="col">Privacy</div>
            <div className="col">Contact us</div>
          </div>

          <Row>
            <Col className="mb-2">
              <Button
                type="button"
                variant="outline-secondary"
                className="footer-button rounded-0 mt-3"
              >
                Service Code
              </Button>
            </Col>
          </Row>
          <div className="row">
            <p
              className="mt-4 col"
              id="anno"
              style={{
                fontSize:
                  window.innerWidth < 768
                    ? mobileBottomStyles.fontSize
                    : desktopBottomStyles.fontSize,
              }}
            >
              {scriptResult}
            </p>
          </div>
        </div>
        <div className="col">
          <div className="row flex-column">
            <div className="col mt-2">Audio Description</div>
            <div className="col">Investor Relations</div>
            <div className="col">Legal Notices</div>
          </div>
        </div>
        <div className="col">
          <div className="row flex-column">
            <div className="col mt-2">Help Center</div>
            <div className="col">Jobs</div>
            <div className="col">Cookie Preferences</div>
          </div>
        </div>
        <div className="col">
          <div className="row flex-column">
            <div className="col mt-2">Gift Cards</div>
            <div className="col">Terms of Use</div>
            <div className="col">Corporate Information</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
