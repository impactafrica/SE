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
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
import SegmentationQues from "../../../Questions/Segmentation/market_research_ques";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
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
  const [anchorElLeft, setAnchorElLeft] = React.useState(null);
  const [anchorElTop, setAnchorElTop] = React.useState(null);
  const [anchorElBottom, setAnchorElBottom] = React.useState(null);
  const [anchorElRight, setAnchorElRight] = React.useState(null);
  const [classicModal, setClassicModal] = React.useState(false);
  const [classicsModal, setClassicsModal] = React.useState(false);
  const [classicalModal, setClassicalModal] = React.useState(false);
  const [brainModal, setbrainModal] = React.useState(false);
  const [narrowModal, setnarrowModal] = React.useState(false);

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
      <h4><b>Your exercise</b></h4>
          <SegmentationQues/>
    </div>
  );
}
