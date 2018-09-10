import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
///import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
//import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },

  menu: {
    width: 200
  },
  card: {
    maxWidth: 345,
    margin: 80,
    float: "right",
    padding: 10
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: "cover"
  }
});

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          Search for pools around you.
        </Typography>
        <Typography component="p">Enter athe address below</Typography>
        <div className={classes.container}>
          <TextField
            label="Street:"
            id="margin-none"
            defaultValue="10 Broadway"
            className={classes.textField}
            helperText="Street Address"
          />
          <TextField
            label="City"
            id="margin-dense"
            defaultValue="Sydney"
            className={classes.textField}
            helperText=""
            margin="dense"
          />
          <TextField
            label="State"
            id="margin-dense"
            defaultValue="NSW"
            className={classes.textField}
            helperText=""
            margin="dense"
          />
          <TextField
            label="PostCode"
            id="margin-dense"
            defaultValue="2000"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
          />
        </div>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary">
          Use your location
        </Button>
        <Button size="small" color="primary">
          Next
        </Button>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
