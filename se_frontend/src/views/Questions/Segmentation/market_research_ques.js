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
"Who specifically will use your product? "
:
<div>
      <Typography >
      <br></br>
      <p><b>9/17</b></p>
      <p style={{color:"black",justify:"center"}}>Who is your end user?</p>
      <textarea style={{height:80,width:270}}/>
      <br></br>
      <Button color="primary">
        Next
    </Button>
      </Typography>
</div>,
"Application: What will the end user use your product for and how will it improve their lives? "
:
<div>
      <Typography >
      <br></br>
      <p><b>10/17</b></p>
      <p style={{color:"black",justify:"center"}}>What will they use your product for? How will it improve their lives?</p>
      <textarea style={{height:80,width:270}}/>
      <br></br>
      <Button color="primary">
        Next
    </Button>
      </Typography>
</div>,
"Benefits:Do they save time or money? Does it boost their profits? Will your product improve the users’ social status or self esteem? Think of benefits holistically and don;t be limited to physically/tangible things"
:
<div>
      <Typography >
      <br></br>
      <p><b>11/17</b></p>
      <p style={{color:"black",justify:"center"}}>What is the actual value that the end user gains from your product?</p>
      <textarea style={{height:80,width:270}}/>
      <br></br>
      <Button color="primary">
        Next
    </Button>
      </Typography>
</div>,
"Lighthouse Customers: Who are the most influential users that may need your product? The people who are respected when they buy and others will follow."
:
<div>
      <Typography >
      <br></br>
      <p><b>12/17</b></p>
      <p style={{color:"black",justify:"center"}}>Who are your “lighthouse customers”?</p>
      <textarea style={{height:80,width:270}}/>
      <br></br>
      <Button color="primary">
        Next
    </Button>
      </Typography>
</div>,
"What about this market will either ease or hinder the adaptation of your product? "
:
<div>
      <Typography >
      <br></br>
      <p><b>13/17</b></p>
      <p style={{color:"black",justify:"center"}}>What about this market will either ease or hinder the adaptation of your product? </p>
      <textarea style={{height:80,width:270}}/>
      <br></br>
      <Button color="primary">
        Next
    </Button>
      </Typography>
</div>,
"Partners/Players: Who do you need to deliver and add value to your product? "
:
<div>
      <Typography >
      <br></br>
      <p><b>14/17</b></p>
      <p style={{color:"black",justify:"center"}}>Who are our partners? </p>
      <textarea style={{height:80,width:270}}/>
      <br></br>
      <Button color="primary">
        Next
    </Button>
      </Typography>
</div>,
"Size of the market: If you can achieve 100 market penetration, how many potential customers exist?  "
:
<div>
      <Typography >
      <br></br>
      <p><b>15/17</b></p>
      <p style={{color:"black",justify:"center"}}>How many potential customers exist?  </p>
      <textarea style={{height:80,width:270}}/>
      <br></br>
      <Button color="primary">
        Next
    </Button>
      </Typography>
</div>,
"Competition: Who, if anyone, is making a similar product?  "
:
<div>
      <Typography >
      <br></br>
      <p><b>16/17</b></p>
      <p style={{color:"black",justify:"center"}}>Who is your competition?</p>
      <textarea style={{height:80,width:270}}/>
      <br></br>
      <Button color="primary">
        Next
    </Button>
      </Typography>
</div>,
"Complementary assets required: What else does your customer need in order to get the full solution? "
:
<div>
      <Typography >
      <br></br>
      <p><b>17/17</b></p>
      <p style={{color:"black",justify:"center"}}>What are the complementary assets required? </p>
      <textarea style={{height:80,width:270}}/>
      <br></br>
      <Button color="primary">
        Next
    </Button>
      </Typography>
</div>,
"You are done!!":"You are done!!"
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
          <Tab label="Question" icon={<Chat />} {...a11yProps(1)} />
          
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
