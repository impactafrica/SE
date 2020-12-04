import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="70%"   mr={1}>
        <LinearProgress style={{borderRadius: 5,height: 10}} variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary"><b>{`${Math.round(
          props.value,
        )}%`}</b></Typography>
      </Box>
    </Box>
  );
}
LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '70%',
    
  },
  colorPrimary: {
    background: 'purple'
  }
});

export default function LinearWithValueLabel() {
  const classes = useStyles();
  const [progress] = React.useState(0);

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel color="primary"  value={progress} />
    </div>
  );
}
