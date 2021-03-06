import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Lost from "./Lost";
import Found from "./Found";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faSearch } from "@fortawesome/free-solid-svg-icons";
import PetProfile from "./PetProfileLost";

const LostAndFoundPage = (props) => {
  const isLostMode = props.isLostMode;
  // const petById = props.petById;

  return (
    <Fragment>
      <header>
        <div className="blue-logo">
          <NavLink to="/"> </NavLink>
        </div>
      </header>

      <section className="container ">
        <div className="row align-items-start ">
          <div className="sidebar-left col-2">
            <nav className="nav flex-column">
              <NavLink className="nav-link" to="/lostandfound/lost">
                <FontAwesomeIcon icon={faSearch} /> Lost
              </NavLink>
              <NavLink className="nav-link" to="/lostandfound/found">
                <FontAwesomeIcon icon={faPaw} /> Found
              </NavLink>
            </nav>
          </div>


          <div className="lost-found-pets col">
            {isLostMode ? <Lost /> : <Found />
            // || petById ? < PetProfile/> : null
            }
          </div>

          <div className="sidebar-right col-2"></div>
        </div>
      </section>
    </Fragment>
  );
};

export default LostAndFoundPage;
