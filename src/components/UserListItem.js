import { useHistory } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const UserListItem = ({currentUser, setCurrentUser,
  user: { id, user_full_name, username, years_of_experience, plants }
}) => {

  const history = useHistory();

  const handleCurrentUserClick = () => {
    setCurrentUser(id)
    console.log(currentUser)
    history.push(`/users/${id}/plants`)
  }

  return (
    <div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <button onClick={handleCurrentUserClick}>{user_full_name}</button>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          username: {username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          years of experience: {years_of_experience}
        </Typography>
      </CardContent>
    </div>
  );
};

export default UserListItem;

// to={`/users/${id}/plants`}