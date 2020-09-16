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
import Quetabs from "../../../Questions/Beachhead/beachhead_conclusion";

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
          <Typography className={classes.heading}>2. Is your market targeted enough?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You will quickly realize that your beachhead market can be segmented further into smaller markets.  
          In order for your market to be optimally targeted, it should meet these three conditions.
          <Link
                  color="primary"
                  block
                  onClick={() => setbrainModal(true)}
                >
                   Read More...
                </Link>
                <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  open={brainModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicalModal(false)}
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
                      onClick={() => setbrainModal(false)}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h3 className={classes.modalTitle}><b> Brainstorming</b></h3>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <p>
                    You will quickly realize that your beachhead market can be segmented further into smaller markets. 
                     In order for your market to be optimally targeted, it should meet these three conditions. 
                     Subject your beachhead market to these three conditions until you can find a segment which
                      meets all three conditions:

                    The customers within the market all buy similar products. 
                    The customers within the market have a similar sales cycle and expect products to provide value 
                    in similar ways. Your salespeople can shift from selling to one customer to selling to a different
                     customer and still be very effective with little or no loss of productivity. 
                    There is “word of mouth” between customers in the market segment, meaning they can serve as compelling 
                    and high-value references for each other in making purchases. 

                    </p>
                   
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                   
                    <Button
                      onClick={() => setbrainModal(false)}
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>3. Conclusion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Describe the beachhead market in detail, explaining how it meets the above criteria and 
          why you think it is the right beachhead market. 

         
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>
      <h4>Your exercise</h4>
          <Quetabs/>
    </div>
  );
}
