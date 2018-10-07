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

const FragmentCard= ({...props}) => {
  return (
    <Card style={{marginBottom:'20px'}}>
      <CardContent>
				<Typography gutterBottom variant="headline" component="h2">
					{props.name}
				</Typography>
				<Typography component="p">
					{props.prompt}
				</Typography>
        {props.children}
      </CardContent>
    </Card>
  );
};

FragmentCard.defaultProps = {};

FragmentCard.propTypes = {};

export default FragmentCard;
