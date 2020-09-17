import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Slide from "@material-ui/core/Slide";



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
          <Typography className={classes.heading}>5. Conclusion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          By this point, you will have gained some clarity on how your potential market will look like. 
          However, we shall choose the ideal market in the next step. For now, come up with a data driven
           (based on the steps and exercises above) list of potential market segments you can pursue. Ensure
            that each segment is loaded with enough details for it to be meaningful.
            <br></br>
            <br></br>
             
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
