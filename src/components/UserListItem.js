import { Link } from "react-router-dom";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const UserListItem = ({
  user: { id, user_full_name, username, years_of_experience, plants },
  handleUserClick
}) => {


  return (
    <div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Link to={`/users/${id}`}>{user_full_name}</Link>
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
