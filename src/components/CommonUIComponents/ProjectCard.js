import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const ProjectCard = ({...props}) => {
  return (
    <Card style={{marginBottom:'20px'}}>
      <CardMedia
        component="img"
        height="140"
        style={{objectFit: 'cover'}}
        image={props.img}
        title={props.name}
      />
      <CardContent>
				<Typography gutterBottom variant="headline" component="h2">
					{props.name}
				</Typography>
				<Typography component="p">
					{props.aim}
				</Typography>
        <CardActions>
          <Link to={`/projects/${props.id}`}>
            <Button size="small" color="primary">
              Contribute
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  );
};

ProjectCard.defaultProps = {};

ProjectCard.propTypes = {};

export default ProjectCard;
