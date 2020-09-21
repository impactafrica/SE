import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Chat from "@material-ui/icons/Chat";


import PersonPinIcon from '@material-ui/icons/PersonPin';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from "components/CustomButtons/Button.js";
import Carousel from "react-slick";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import ArrowNext from "assets/img/arrow_right.png"
import ArrowPrev from "assets/img/arrow_left.png"


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

function LeftNavButton(props) {
  const {className, style, onClick} = props
  return (
      <div
          className="slick-arrow"
          style={{...style, display: 'block'}}
          onClick={onClick}
      >
          <Button color="primary">Previous</Button>
      </div>
  );
}

function RightNavButton(props) {
  const {className, style, onClick} = props
  return (
      <div
          className="slick-arrow"
          style={{...style, display: 'block',}}
          onClick={onClick}
      >
        <Button color="primary">Next</Button>
          {/* <img src={ArrowNext} alt="arrow_left"/> */}
      </div>
  );
}

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
  };
  
const dict = [
  {
  "mydiv":
  <div>
        <Typography >
        <br></br>
        <p><b>1/8</b></p>
        <p style={{color:"black",justify:"center"}}>Who is your end user?</p>
        <textarea style={{height:80,width:270}}/>
        <br></br>
        <Button color="primary">
          Next
      </Button>
        </Typography>
  </div>
  },
  {
  "mydiv"
  :
  <div>
        <Typography >
        <br></br>
        <p><b>2/8</b></p>
        <p style={{color:"black",justify:"center"}}>What will they use your product for? How will it improve their lives?</p>
        <textarea style={{height:80,width:270}}/>
        <br></br>
        <Button color="primary">
          Next
      </Button>
        </Typography>
  </div>
  },
  {
  "mydiv"
  :
  <div>
        <Typography >
        <br></br>
        <p><b>3/8</b></p>
        <p style={{color:"black",justify:"center"}}>What is the actual value that the end user gains from your product?</p>
        <textarea style={{height:80,width:270}}/>
        <br></br>
        <Button color="primary">
          Next
      </Button>
        </Typography>
  </div>
  },
  {
  "mydiv"
  :
  <div>
        <Typography >
        <br></br>
        <p><b>4/8</b></p>
        <p style={{color:"black",justify:"center"}}>Who are your “lighthouse customers”?</p>
        <textarea style={{height:80,width:270}}/>
        <br></br>
        <Button color="primary">
          Next
      </Button>
        </Typography>
  </div>
  },
  {
  "mydiv"
  :
  <div>
        <Typography >
        <br></br>
        <p><b>5/8</b></p>
        <p style={{color:"black",justify:"center"}}>What about this market will either ease or hinder the adaptation of your product? </p>
        <textarea style={{height:80,width:270}}/>
        <br></br>
        <Button color="primary">
          Next
      </Button>
        </Typography>
  </div>
  },
  {
  "mydiv"
  :
  <div>
        <Typography >
        <br></br>
        <p><b>6/8</b></p>
        <p style={{color:"black",justify:"center"}}>Who are our partners? </p>
        <textarea style={{height:80,width:270}}/>
        <br></br>
        <Button color="primary">
          Next
      </Button>
        </Typography>
  </div>
  },
  {
  "mydiv"
  :
  <div>
        <Typography >
        <br></br>
        <p><b>7/8</b></p>
        <p style={{color:"black",justify:"center"}}>How many potential customers exist?  </p>
        <textarea style={{height:80,width:270}}/>
        <br></br>
        <Button color="primary">
          Next
      </Button>
        </Typography>
  </div>
  },
  {
  "mydiv"
  :
  <div>
        <Typography >
        <br></br>
        <p><b>8/8</b></p>
        <p style={{color:"black",justify:"center"}}>Who is your competition?</p>
        <textarea style={{height:80,width:270}}/>
        <br></br>
        <Button color="primary">
          Next
      </Button>
        </Typography>
  </div>
  },
  {
  "mydiv"
  :
  <div>
        <Typography >
        <br></br>
        <p><b>8/8</b></p>
        <p style={{color:"black",justify:"center"}}>What are the complementary assets required? </p>
        <textarea style={{height:80,width:270}}/>
        <br></br>
        <Button color="primary">
          Next
      </Button>
        </Typography>
  </div>
  },
  {"You are done!!":"You are done!!"}
];

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
          <Tab label="Here is your exercise" style={{color:"white"}}icon={<Chat />} {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>
      {
          <div>
            <Carousel {...settings}>
            {
              dict.map(function(d, idx)
              {
                return(
                  <TabPanel  key={idx}>{d.mydiv}</TabPanel>
                )
              })
            }
            </Carousel>
          </div>     
      }
      
      <div>
          
      </div>
    </div>
  );
}
