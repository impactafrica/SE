import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Slide from "@material-ui/core/Slide";

import Quetabs from "../../../Questions/Persona/persona_description";

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
          <Typography className={classes.heading}>3. Distribute the Persona</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The success of a persona relies on using it. Therefore, you must make sure everyone 
          in your company knows what your customer looks like and is empathetic to his needs and pains.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>4. Persona Conclusion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Describe the essentials of the persona below, trying to describe all its characteristics.
          
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <h4><b>Your exercise</b></h4>
          <Quetabs/>
      
    </div>
  );
}
