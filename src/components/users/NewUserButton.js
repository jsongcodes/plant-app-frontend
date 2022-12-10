import { Link } from 'react-router-dom';

function NewUserButton() {
  return (
    <Link
      to="/users/new"
    >
      New User
    </Link>
  );
}

export default NewUserButton