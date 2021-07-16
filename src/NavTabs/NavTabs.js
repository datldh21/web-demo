import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import HomePage from '../HomePage/HomePage';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role = "tabpanel"
            hidden = {value !== index}
            id = {`nav-tabpanel-${index}`} 
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}   
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    }
}

function LinkTab(props) {
    return (
        <Tab 
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    }
}))

export default function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    <LinkTab label="SIGN IN" href="/signin" {...a11yProps(0)} />
                    <LinkTab label="SIGN UP" href="/signup" {...a11yProps(1)} />
                    <LinkTab label="HOME PAGE" href="/" {...a11yProps(2)} />
                </Tabs>
            </AppBar>

            <TabPanel class="background" value={value} index={0}>
                <SignIn></SignIn>
            </TabPanel>
            <TabPanel class="background" value={value} index={1}>
                <SignUp></SignUp>
            </TabPanel>
            <TabPanel class="background" value={value} index={2}>
                <HomePage></HomePage>
            </TabPanel>
        </div>
    )
}