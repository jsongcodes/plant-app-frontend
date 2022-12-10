import { Link } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const UserListItem = ({
  user: { id, name, years_of_experience },
  deleteUser,
}) => {

  
  return (
    <div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Years of Experience: {years_of_experience}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Number of Plant Descriptions:
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
      <Link to={`/users/${id}/edit`}>
        Edit
      </Link></Button>
        <Button size="small" onClick={() => deleteUser(id)}>   delete</Button>
      </CardActions>
    </div>
  );
};

export default UserListItem;
