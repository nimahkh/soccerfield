import React, {Component} from 'react';
import PlayerLineup from "./PlayerLineup";
import Grid from "@material-ui/core/Grid/Grid";
import {List} from "@material-ui/core/index";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";
import grey from "@material-ui/core/colors/grey";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    },
    lineBreak: {
        borderBottom: "1px solid rgba(0,0,0,0.3)",
        height: '1px',
        marginBottom: 15,
        padding: 2,
        width: '100%'
    },
    Bench: {
        marginBottom: 5,
        color: grey[600],
        fontSize: 13,
        textAlign: 'center'
    },
    Formation: {
        marginBottom: 5,
        fontSize: 13,
        textAlign: 'center',
        padding: 5,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 5,
        color: "#ffffff"
    }
});

class LineupCard extends Component {

    handleGoToPlayer = (player) => {
        this.props.goToPlayer({player});
    };

    handleGoToCoach = (coach) => {
        this.props.goToCoach(coach);
    };

    setLineBreak = () => {
        this.setState({lineBreak: true})
    };

    constructor(props) {
        super(props);
        this.state = {
            lineBreak: false,
        };
    }

    render() {
        const {classes, dataActive, dataDeactive, home, formation, coach} = this.props;

        return <div>
            <Grid container spacing={16}>
                <Grid item xs={12} md={6}>
                    <div className={classes.demo}>
                        <List dense={true}>
                            {coach !== undefined &&
                                <span>
                                    <PlayerLineup goToPlayer={this.handleGoToCoach} data={coach} home={home}/>
                                    <Typography variant={"caption"} className={classes.Formation}>{formation}</Typography>
                                </span>
                            }
                            {dataActive !== undefined && dataActive.map((item, index) => (
                                <PlayerLineup key={index} goToPlayer={this.handleGoToPlayer} data={item} home={home}/>
                            ))}
                        </List>

                        <div className={classes.lineBreak}/>

                        <Typography variant={'caption'} className={classes.Bench}> Bench </Typography>

                        <List dense={true}>
                            {dataDeactive.map((item, index) => (
                                <PlayerLineup key={index} goToPlayer={this.handleGoToPlayer} data={item} home={home}/>
                            ))}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    }

}

export default withStyles(styles)(LineupCard);