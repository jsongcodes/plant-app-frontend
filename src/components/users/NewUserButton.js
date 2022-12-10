import { Link } from 'react-router-dom';

function NewUserButton() {
  return (
    <Link
      to="/users/new"
    >
      new user
    </Link>
  );
}

export default NewUserButton