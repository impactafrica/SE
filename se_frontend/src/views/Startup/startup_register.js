import React,{useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import MultipleValueTextInput from 'react-multivalue-text-input';

import { Link } from "react-router-dom";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  useEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Systematic Entrepreneurship"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Register Your Project</h4>
                    
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Project Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Company Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    {/* <CustomInput
                      labelText="Members"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                            <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    /> */}
                    <br></br>
                    <br></br>
                    <div style={{display:"flex",alignItems:'center'}}>
                    <MultipleValueTextInput
                      style={{border:"none", borderBottom: "1px solid lightgray",flex: 1,width: "100%"}}
                      placeholder="Members Email Addresses,Comma Separated"
                      onItemAdded={(item, allItems) => console.log(`Item added: ${item}`)}
                      onItemDeleted={(item, allItems) => console.log(`Item removed: ${item}`)}
                      name="item-input"
                      border="none"
                    />
                    <People style={{position:"right"}}/>
                    </div>
                  </CardBody>

                  <CardFooter className={classes.cardFooter}>
                  <Link to={"/modules_list"} className={classes.link}>
                    <Button
                      color="primary"
                      size="lg"
                      rel="noopener noreferrer"
                    >
                      Get Started
                    </Button>
                  </Link>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
