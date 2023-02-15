import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md bg-base-100 compact side">
      <div className="flex-row items-center space-x-4 card-body">
        {/* First div */}
        <div>
          <div className="avatar">
            <div className="rounded-full w-14">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        {/* Second div */}
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            to={`/users/${login}`}
            className="text-opacity-40 text-base-content"
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
