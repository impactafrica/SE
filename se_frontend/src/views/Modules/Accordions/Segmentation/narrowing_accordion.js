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
import SegmentationQues from "../../../Questions/Segmentation/narrowing_ques";
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
          <Typography className={classes.heading}>3. Narrowing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Your next step would be to narrow down to the most viable and interesting market opportunities
          <Link
                  color="primary"
                  block
                  onClick={() => setnarrowModal(true)}
                >
                   <b>Read More...</b>
                </Link>
                
                <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  open={narrowModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setnarrowModal(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <IconButton
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => setnarrowModal(false)}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h3 className={classes.modalTitle}><b> Narrowing</b></h3>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <ReactPlayer width={"100%"}
                      url="https://www.youtube.com/watch?v=c2XwfP4jlZs"
                    />
                    <br></br>
                    <p>
                    Naturally, now that you have identified the numerous potential market segments
                     and end users, your next step would be to narrow down to the most viable and 
                     interesting market opportunities (about 3-5 market segments).
                    </p>
                   
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                   
                    <Button
                      onClick={() => setnarrowModal(false)}
                      color="danger"
                      simple
                    >
                      I'm done!
                    </Button>
                  </DialogActions>
                </Dialog>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <h4><b>Your exercise</b></h4>
          <SegmentationQues/>
    </div>
  );
}
