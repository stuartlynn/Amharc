import React from 'react';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ImageUploader from './ImageUploader';
import {Link} from 'react-router-dom';

function EditProject({...props}) {
  const {name, img, aim} = props.project;
  return (
    <div style={{width: '100%', height: '100%'}}>
      <FormControl style={{width: '100%', height: '100%'}}>
        <InputLabel htmlFor="Project Title">Project Name</InputLabel>
        <Input
          id="Project Name"
          value={name ? name : ''}
          onChange={e => props.onUpdate({name: e.target.value})}
        />
      </FormControl>

      <FormControl style={{width: '100%', height: '100%'}}>
        <TextField
          id="Project Aim"
          label="Project Aim"
          value={aim ? aim : ''}
          onChange={e => props.onUpdate({aim: e.target.value})}
        />
      </FormControl>

      <ImageUploader onChange={url => props.onUpdate({img: url})} />
      <Button onClick={props.onSaveProject}>Save</Button>
      <Link to="/projects">
        <Button>Cancel</Button>
      </Link>
    </div>
  );
}

EditProject.defaultProps = {};

EditProject.propTypes = {};

export default EditProject;
