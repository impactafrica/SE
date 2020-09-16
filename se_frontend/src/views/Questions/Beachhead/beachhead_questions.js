import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import Chat from "@material-ui/icons/Chat";
import Radio from "@material-ui/core/Radio";


import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from "components/CustomButtons/Button.js";
import Carousel from "react-slick";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(styles);


const dict = {

"Beachhead: Evaluate the purchasing power of the target group. the market is not as attractive. "
:
<div>
          <Typography >
          <br></br>
          <p><b>1/7</b></p>
            <FormControl component="fieldset">
            <FormLabel style={{color:"black"}} component="legend">Is the customer well funded?</FormLabel>
            <RadioGroup aria-label="gender" name="gender1">
              <FormControlLabel style={{color:"black"}} value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel style={{color:"black"}} value="no" control={<Radio />} label="No" />
              </RadioGroup>
          </FormControl>
          <br></br>
          <Button color="primary">
            Next
        </Button>
          </Typography>
    </div>,
"Beachhead: Access: While starting out, it is imperative that you deal directly with customers, hence it is important you ask yourself this"
:
<div>
     
      <Typography >
      <br></br>
      <p><b>2/7</b></p>
        <FormControl component="fieldset">
        <FormLabel style={{color:"black"}} component="legend">is the end user readily accessible to you and your salesforce?</FormLabel>
        <RadioGroup aria-label="gender" name="gender1">
          <FormControlLabel style={{color:"black"}} value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel style={{color:"black"}} value="no" control={<Radio />} label="No" />
          </RadioGroup>
      </FormControl>
      <br></br>
      <Button color="primary">
        Next
    </Button>
      </Typography>
</div>,
"Beachhead: Reason to buy: Does your target customer have a compelling and valid reason to buy your product?"
:
<div>
      <Typography >
      <br></br>
      <p><b>3/7</b></p>
      <p style={{color:"black",justify:"center"}}>What need does your product fulfill?</p>
      <textarea style={{height:80,width:270}}/>
      <br></br>
      <Button color="primary">
        Next
    </Button>
      </Typography>
</div>,
"Beachhead: Can you deliver a full product?  Is it within your scope to deliver a fully functional solution with or without partners? Is your product complete and can it offer a singular holistic solution to the end user’s challenges and /or needs?"
:
<div>
      <Typography >
      <br></br>
      <p><b>4/7</b></p>
        <FormControl component="fieldset">
        <FormLabel style={{color:"black"}} component="legend">Can you deliver a full product?</FormLabel>
        <RadioGroup aria-label="gender" name="gender1">
          <FormControlLabel style={{color:"black"}} value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel style={{color:"black"}} value="no" control={<Radio />} label="No" />
          </RadioGroup>
      </FormControl>
      <br></br>
      <Button color="primary">
        Next
    </Button>
      </Typography>
</div>,
"Beachhead: Competition is inevitable. At any given point competitors are trying to win over market segments similar to yours. Take some time to understand where the competition exists, how they can be a blocker to you and your product and where your competitive advantage is. "
:
<div>
      <Typography >
      <br></br>
      <p><b>5/7</b></p>
      <p style={{color:"black",justify:"center"}}>Where is the competition??</p>
      <textarea style={{height:80,width:270}}/>
      <br></br>
      <Button color="primary">
        Next
    </Button>
      </Typography>
</div>,
" Beachhead: Given that you win over this particular market segment, can you leverage on this success to enter new markets with moderate adjustments to your product? Or will new markets mean that your product has to radically change? Will the same happen with your sales strategy? Nonetheless, ensure that focus remains within your beachhead market. (NB: We shall cover how to identify your beachhead market later on in this module)"
:
<div>
  <Typography >
  <br></br>
  <p><b>6/7</b></p>
    <FormControl component="fieldset">
    <FormLabel style={{color:"black"}} component="legend">Can you leverage on success? </FormLabel>
    <RadioGroup aria-label="gender" name="gender1">
      <FormControlLabel style={{color:"black"}} value="yes" control={<Radio />} label="Yes" />
      <FormControlLabel style={{color:"black"}} value="no" control={<Radio />} label="No" />
      </RadioGroup>
  </FormControl>
  <br></br>
  <Button color="primary">
    Next
</Button>
  </Typography>
</div>,
"Beachhead: Does this market segment stay consistent and align itself to your brand i.e values, passion and goals? It is paramount that you stay within brand."
:
<div>
  <Typography >
  <br></br>
  <p><b>7/7</b></p>
    <FormControl component="fieldset">
    <FormLabel style={{color:"black"}} component="legend">Does this market segment align itself to your brand? </FormLabel>
    <RadioGroup aria-label="gender" name="gender1">
      <FormControlLabel style={{color:"black"}} value="yes" control={<Radio />} label="Yes" />
      <FormControlLabel style={{color:"black"}} value="no" control={<Radio />} label="No" />
      </RadioGroup>
  </FormControl>
  <br></br>
  <Button color="primary">
    Next
</Button>
  </Typography>
</div>,
"You are done!!":"You are done!! Proceed to section 2"
    };

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    wrap:false,
    arrows: false,
    nextIcon: <Button color="primary">Next</Button>,
    prevIcon: <Button>Previous</Button>     
};

  return (
      
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:"purple"}} color="purple">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Recap" style={{color:"white"}} icon={<PersonPinIcon/>} {...a11yProps(0)} />
          <Tab label="Question" style={{color:"white"}}icon={<Chat />} {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>
      {
          <Carousel {...settings} >
              {
                Object.entries(dict)
                .map(([mykey,myvalue])=>
                        <div >
                            <TabPanel value={value} index={0}>
                                {mykey}      
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                {myvalue}      
                            </TabPanel>
                    </div>
                )
              }
            </Carousel>
          
      }
      
      <div>
          
      </div>
    </div>
  );
}
