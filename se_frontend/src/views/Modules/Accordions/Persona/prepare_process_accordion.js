import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Quetabs from "../../../Questions/Persona/prepare_questions";

// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import ReactPlayer from "react-player"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";
export default function SimpleAccordion() {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);


  return (
    <div className={classes.root}>
      <Accordion
       color="primary"
       >
        <AccordionSummary
          color="primary"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          headerstyle={{height: "100px"}}
        >
          <Typography className={classes.heading}>1. Prepare the Process</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          By following these steps, you will be answering this question: “If I had only one end user to 
          represent our end-user profile, who would it be?” 
                
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <h4><b>Your exercise</b></h4>
          <Quetabs/>
    </div>
  );
}
