import React,{useState} from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { create_project } from '../../actions/auth'
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/core components
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import MultipleValueTextInput from 'react-multivalue-text-input';

import { Link } from "react-router-dom";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import { useForm } from "react-hook-form";
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const ProjectRegister = ({create_project, isAuthenticated}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [requestSent, setRequestSent] = useState(false);
  
  const [formData, setFormData] = useState({
      project_name: '',
      description: ''
  });

  const { project_name, description } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
      e.preventDefault();

      create_project(project_name,description);
      setRequestSent(true);
  };

  if (!isAuthenticated)
        return <Redirect to='/login' />;
  
  if (requestSent){
        const handleClick = (Transition) => () => {
          setTransition(() => Transition);
          setOpen(true);
        };
      return <Redirect to='/modules_list' /> }     

  return (
    <div>
      
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card >
                <form onSubmit={e => onSubmit(e)}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h3 style={{fontFamily:"Montserrat"}}>Register Your Project</h3>
                    
                  </CardHeader>
                  <CardBody style={{fontFamily:"Montserrat"}}>
                  <div className='form-group'>
                    <input 
                        style={{fontSize:"11pt"}}
                        className='form-control'
                        type='text'
                        placeholder='Project Name'
                        name='project_name'
                        value={project_name}
                        onChange={e => onChange(e)}
                        required 
                    />
                </div>
                <div className='form-group'>
                    <input 
                        className='form-control'
                        style={{fontSize:"11pt"}}
                        type='text'
                        placeholder='Project description'
                        name='description'
                        value={description}
                        onChange={e => onChange(e)} 
                        required 
                    />
                </div>
                <CardFooter style={{alignItems:"center"}} className={classes.cardFooter} >
                
                    <Button
                      color="primary"
                      size="xlg"
                      onClick={handleClick(TransitionUp)}
                      style={{fontFamily:"Montserrat"}}
                      type='submit'
                    >
                      Register
                    </Button>
                    
                    <Snackbar
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={transition}
                      message="succsess"
                      key={transition ? transition.name : ''}
                    />
                </CardFooter>
                  <br/>
                 
                  </CardBody>
                  
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { create_project })(ProjectRegister);