import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const PlantCards = ({plants}) => {
    return (
        <div className="entry-list">

        <Container>
  
          <Grid container spacing={3}>
            {plants.map((plant) => (
              <Grid
                className="past-entries"
                item
                xs={12}
                md={6}
                lg={4}
                key={plant.id}
              >
  
                  <h2>{plant.userName}</h2>
                  <p className="body">{plant.plantName}</p>
  
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    )
}

export default PlantCards;