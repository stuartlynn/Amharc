import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-contents: space-between;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid;
  z-index: 20;
  box-sizing: border-box;
  padding: 20px;
`;

const ObservationRunnerHeader = ({...props}) => {
  return (
    <HeaderContainer>
      <Typography>{props.projectName} |</Typography>
      <Typography>{props.observationName}</Typography>
      <Typography> 1/5 </Typography>
      <Button color="primary" onClick={props.onSubmit} >Submit</Button>
      <Button color="secondary" onClick={props.onAbandon}>
        Abandon
      </Button>
    </HeaderContainer>
  );
};

ObservationRunnerHeader.defaultProps = {};

ObservationRunnerHeader.propTypes = {};

export default ObservationRunnerHeader;
