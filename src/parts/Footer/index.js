import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";

import Button from "../../components/Button";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row mb-3 justify-content-center align-items-center">
          <div className="icon">
            <Button
              isExternal
              type="link"
              href="https://www.facebook.com/iNoozura"
              target="_blank"
              style={{
                textDecorationThickness: "none",
                color: "#fff",
                cursor: "pointer",
              }}
              className="mr-2"
            >
              <FacebookIcon />
            </Button>
            <Button
              isExternal
              type="link"
              target="_blank"
              href="https://instagram.com/inozura"
              style={{
                textDecorationThickness: "none",
                color: "#fff",
                cursor: "pointer",
              }}
              className="mr-2"
            >
              <InstagramIcon />
            </Button>
            <Button
              isExternal
              type="link"
              target="_blank"
              href="https://twitter.com/inoozura"
              style={{
                textDecorationThickness: "none",
                color: "#fff",
                cursor: "pointer",
              }}
              className="mr-2"
            >
              <TwitterIcon />
            </Button>
            <Button
              isExternal
              type="link"
              target="_blank"
              href="https://www.linkedin.com/in/novandra-zulfi-ramadhan-33ab2a1aa/"
              style={{
                textDecorationThickness: "none",
                color: "#fff",
                cursor: "pointer",
              }}
              className="mr-2"
            >
              <LinkedInIcon />
            </Button>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="term d-block">
            <Link to="/terms" style={{ textDecoration: "none", color: "#fff" }}>
              Terms of Use
            </Link>
            <span className="text-white"> | </span>
            <Link
              to="/policy"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Privacy Police
            </Link>
          </div>
        </div>
        <p className="mt-3 copyright text-center">© 2020-2021 Whatnime</p>
      </div>
    </footer>
  );
}
