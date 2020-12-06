import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { faYoutube} from "@fortawesome/free-brands-svg-icons"
import { faSnapchat} from "@fortawesome/free-brands-svg-icons"
import { faInstagram} from "@fortawesome/free-brands-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";



import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div >
      <GridContainer justify="center" >
        <GridItem cs={12} sm={12} md={8}>
         
          <GridItem cs={12} sm={12} md={12} className={classes.itemGrid}>
            <div style={{color:"black",fontFamily:"Montserrat",fontWeight:"600",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"}}>

              <h2 style={{color:"black",fontFamily:"Montserrat",fontWeight:"600"}}><b>Reach out to us</b></h2>
            </div>
            <div style={{color:"black",fontFamily:"Montserrat",fontWeight:"600",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"}}>
            <FontAwesomeIcon size="2x" style={{color:"purple"}} icon={faPhone} />
            
            <h3 style={{fontFamily:"Montserrat",fontWeight:"600"}}>+2547123456</h3>
            </div>
            
          </GridItem>
          <GridItem cs={12} sm={12} md={12} className={classes.itemGrid}>
            <div style={{color:"black",fontFamily:"Montserrat",fontWeight:"600",
            paddingLeft:"5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"}}>
            
            
            <FontAwesomeIcon size="3x" style={{color:"purple"}} icon={faMailBulk} />
            <h3 style={{fontFamily:"Montserrat",fontWeight:"600",paddingLeft:"5px"}}>seplatform@gmail.com</h3>
            </div>
            
          </GridItem>
          <br/>
          <br/>
          <GridItem cs={12} sm={12} md={12} className={classes.itemGrid}>
            <div style={{color:"purple", display:"flex",fontFamily:"Montserrat",fontWeight:"600",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom:"50px"}}>
            <FontAwesomeIcon size="3x"  icon={faFacebook} />
            <FontAwesomeIcon size="3x" style={{paddingLeft:"5px"}} icon={faTwitter} />
            <FontAwesomeIcon size="3x" style={{paddingLeft:"5px"}} icon={faLinkedin} />
            <FontAwesomeIcon size="3x" style={{paddingLeft:"5px"}} icon={faInstagram} />
            <FontAwesomeIcon size="3x" style={{paddingLeft:"5px"}}icon={faYoutube} />
            <FontAwesomeIcon size="3x"  style={{paddingLeft:"5px"}} icon={faSnapchat} />
            </div>
            
          </GridItem>
         
          
          {/* <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button style={{fontFamily:"Montserrat"}} color="primary">Send Message</Button>
              </GridItem>
            </GridContainer>
          </form> */}
        </GridItem>
      </GridContainer>
    </div>
  );
}
