import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Slide from "@material-ui/core/Slide";
import Quetabs from "../../../Questions/Persona/profile_questions";

// @material-ui/icons
// core components

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
  
  return (
    <div className={classes.root}>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>2. Define the Persona Profile</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Now fill out the details below and be as specific as possible. Keep in mind that the persona is an
           accurate representation of your end user, hence estimates and/or ranges will not work.  
          If you are able to find other distinguishing characteristics of your persona, be sure to add them.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>
          <Quetabs/>
    </div>
  );
}
