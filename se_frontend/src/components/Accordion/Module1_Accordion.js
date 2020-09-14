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
      <Accordion
       color="primary"
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
          Market segmentation is the process of dividing  your target market into approachable groups. 
          These subsets can be categorized according to primary factors such as demographics, priorities,
           needs, common interests and behaviour.
                <Link
                  color="primary"
                  block
                  onClick={() => setClassicModal(true)}
                >
                   Read More...
                </Link>
                <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
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
                      onClick={() => setClassicModal(false)}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h3 className={classes.modalTitle}><b>Market Segmentation</b></h3>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    
                    <p>
                    Market segmentation is the process of dividing  your target market into
                     approachable groups. These subsets can be categorized according to primary 
                     factors such as demographics, priorities, needs, common interests and behaviour. 
                     Market segmentation is the first and one of the most vital steps towards identifying 
                     the single most important and necessary condition for a business; paying customers.  
                      We shall begin by looking into and understanding different market types.

                    </p>
                    <h4>
                      <b>a.1. Market Types</b>
                    </h4>
                    <ReactPlayer width={"100%"}
                      url="https://www.youtube.com/watch?v=0LNQxT9LvM0&t=2060s"
                    />
                    <p>
                    To eventually understand who you are targeting with your product, we first need to 
                    distinguish between market types. Each market type will need a different strategy and 
                    approach, hence making it necessary to understand them.
                    </p>
                    <h4></h4>
                    <p><b>B2C (Business to Customer):</b> These are businesses that sell directly to their end users </p>

                    <p><b>B2B (Business to Business):</b> These are businesses that sell to other businesses. </p>
                    <p><b>B2M (Business to Many):</b> Business to many is simply a collective term for businesses that 
                    operate on both b2b and b2c models. These businesses sell to both businesses and directly to consumers concurrently</p>
                    <ReactPlayer width={"100%"}
                      url="https://youtu.be/tckGI4C7k10"
                    />
                    <p><b>B2B2C (Business to Business to Customer):</b> B2b2c is close to a fusion of b2b and b2c. In b2b2c, businesses sell 
                    their product to other businesses to leverage on the access to customers that the second company has. </p>

                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                   
                    <Button
                      onClick={() => setClassicModal(false)}
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
          <Typography className={classes.heading}>2. Brainstorming</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Think about every possible customer type that may need your product. 
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
                    At this point, you are allowed to dream. Think about every possible customer type that 
                    may need your product. Nothing is off limits, however much of a longshot it may seem, be 
                    sure to note it down. Be open minded and creative and so not shy away from speaking about 
                    your idea to potential customers. This allows you to see your product from the customer's perspective.
                    Some activities you can undertake during this step are: 

                    Brainstorm with your team about every possible market type (b2b, b2c, b2b2c, b2b & b2c) and segment 
                    these customers based on the following parameters (and as many others as you deem necessary:  
                    Geography, Income, Industry and Gender, Profession. 
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
          <Typography className={classes.heading}>3. Narrow</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Your next step would be to narrow down to the most viable and interesting market opportunities
          <Link
                  color="primary"
                  block
                  onClick={() => setnarrowModal(true)}
                >
                   Read More...
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
                  block
                  onClick={() => setClassicsModal(true)}
                >
                   Read More...
                </Link>
                <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  open={classicsModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicsModal(false)}
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
                      onClick={() => setClassicModal(false)}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h3 className={classes.modalTitle}><b> Primary Market Research</b></h3>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <p>
                    After narrowing down your viable market opportunities, 
                     an in depth analysis and research of your primary market is now due. 
                     Gather the vast majority of your information by directly talking to real 
                     potential customers. Understand their needs, situations, pains and opportunities. 
                     It is imperative to interact with your potential end users. There are no shortcuts to this step.
                       Stay objective and keep an open mind. 
                      To get the best out of your research, here is how you should organize it:

                    </p>
                   
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                   
                    <Button
                      onClick={() => setClassicsModal(false)}
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
          <Typography className={classes.heading}>5. BeachHead Market</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          By definition, a beachhead market is  a market that fits 
          certain characteristics that make it ideal for a product to thrive. 
          In this step, we shall analyze the top 3-5 markets you selected and 
          narrow them the ideal one. 
          <Link
                  color="primary"
                  block
                  onClick={() => setClassicalModal(true)}
                >
                   Read More...
                </Link>
                <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  open={classicalModal}
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
                      onClick={() => setClassicalModal(false)}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h3 className={classes.modalTitle}><b> BeachHead Market</b></h3>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <p>
                    We started out by brainstorming and laying out all of the potential markets 
                    where your product would thrive. Then we narrowed down all of the options you
                     had to about 3-5 markets. In this step we will narrow down focus further to enable
                      us to determine what your beachhead market is. 
                    By definition, a beachhead market is  a market that fits certain characteristics that 
                    make it ideal for a product to thrive. 
                    <br></br>

                    <p>In this step, we shall analyze the top 3-5 markets you selected and narrow them the 
                    ideal one. After that, we shall further segment that one market to determine your beachhead market. </p>

                    <p>Initially, especially with first time entrepreneurs, there’s a notion that more markets will mean 
                    their odds of success are higher. However, the contrary is true. You should aim to identify one market 
                    that fits the demand for your product then leverage off that success. </p>

                    </p>
                   
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                   
                    <Button
                      onClick={() => setClassicalModal(false)}
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
      
    </div>
  );
}
