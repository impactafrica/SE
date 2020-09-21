import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";
import Slide from "@material-ui/core/Slide";
import SegmentationQues from "../../../Questions/Segmentation/market_research_ques";
// @material-ui/icons

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
          <Typography className={classes.heading}>4. Primary Market Research</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Gather the vast majority of your information by directly talking to real potential customers. 
          Understand their needs, situations, pains and opportunities. It is imperative to interact with your 
          potential end users. There are no shortcuts to this step. 
                <Link
                  color="primary"
                  to={"/primary-research"}
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
