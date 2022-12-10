import { Link } from "react-router-dom";

const UserDetail = ({ user = {}, deleteUser }) => {
  const { id, name, years_of_experience } = user;
  return (
    <div>
      <h1>{name}</h1>
      <p>{years_of_experience}</p>
      <div>
        <Link to={`/users/${id}/edit`}>edit </Link>
        <button
          onClick={() => deleteUser(id)}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default UserDetail;
