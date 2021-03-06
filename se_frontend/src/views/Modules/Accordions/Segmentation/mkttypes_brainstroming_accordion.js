import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";
import Slide from "@material-ui/core/Slide";
import SegmentationQues from "../../../Questions/Segmentation/brainstorming_ques";


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
       height="20%"
       >
        <AccordionSummary
        color="primary"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>1. Market Types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To eventually understand who you are targeting with your product, we first need to 
                    distinguish between market types. 
                
                <br></br>
                <Link
                  color="primary"
                  to={"/market_type"}
                >
                   <b>Read More...</b>
                </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>2. Brainstorming</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          At this point, you are allowed to dream. Think about every possible customer type that may need your product.
                <Link
                  color="primary"
                  to={"/brainstorming"}
                >
                   <b>Read More...</b>
                </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <br></br>
          <SegmentationQues/>
    </div>
  );
}
