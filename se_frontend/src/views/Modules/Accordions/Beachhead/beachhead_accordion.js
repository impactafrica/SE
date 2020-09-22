import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Slide from "@material-ui/core/Slide";
import Quetabs from "../../../Questions/Beachhead/beachhead_questions";

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
      <Accordion
       color="primary"
       >
        <AccordionSummary
        color="primary"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>1. Choosing your beachhead market</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In this step, we shall subject the 3-5 markets that we picked earlier to the 
                    same criteria in Step a.2 till we can identify your beachhead markets. 
                    NOTE: In the eventuality that 2 or more markets stand out as your beachhead market,
                     it is important that you select one and move with it.  
                
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <br></br>
          <Quetabs/>
    </div>
  );
}
