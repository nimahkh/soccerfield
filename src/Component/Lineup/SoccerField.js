import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Defender from "./Defender";
import Middle from "./Middle";
import Forward from "./Forward";
import Typography from "@material-ui/core/Typography/Typography";
import {Avatar} from "@material-ui/core/index";
import Grass from "../../assets/img/grass2.png";

const styles = theme => ({
    CenterField: {
        margin: '0 auto'
    },
    SoccerField: {
        width: 'auto',
        backgroundImage: `url(${Grass})`,
        backgroundColor:'#347B3B',
        backgroundRepeat: 'repeat',
        backgroundSize: '75px 75px',
        backgroundPosition: '-20px -20px'
    },
    HomeTeam: {
        position: 'relative',
        width: '100%',
        margin: '0 auto',
    },
    AwayTeam: {
        position: 'relative',
        width: '100%',
        margin: '0 auto',
    },
    title: {
        width: '50%',
        marginTop: 20,
        margin: '0 auto',
        color: "#ffffff",
        lineHeight: '15px',
    },
    avatar: {
        boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
        background: "rgba(255,255,255, 1)",
        border: "0px solid rgba(46, 125, 50,1)",
        borderRadius: "50%",
        right: 0,
        maxWidth: '17%'
    },
    CoachAway: {
        position: 'relative',
        left: 0,
        padding: 2
    },
    CoachHome: {
        padding: 2
    },
    HomeFlagImage: {
        maxWidth: 30,
        position: 'absolute',
        right: 1,
        opacity: '.5'
    },
    AwayFlagImage: {
        maxWidth: 30,
        position: 'absolute',
        right: 1,
        opacity: '.5',
        marginTop:'-30px'
    }
});

class SoccerField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nextStart: 0,
            nextEnd: 0,
        }
    }

    render() {
        const {classes, home, away, homeFormation, awayFormation, homeCoach, awayCoach, homeFlag, awayFlag} = this.props;
        const {nextStart, nextEnd} = this.state;
        console.log(homeFormation);
        let homeformation = homeFormation.split('-');
        let awayformation = awayFormation.split('-');

        let Players = this.chunkPlayers(nextStart, nextEnd, home, homeformation);
        let awayPlayers = this.chunkPlayers(nextStart, nextEnd, away, awayformation);

        return <div className={["container m-0 p-0", classes.CenterField].join(" ")}>
            <div className={classes.SoccerField}>
                <div className={classes.CoachHome}>
                    <div className={'row m-0 p-0 rtl'}>
                        <Avatar className={[classes.avatar].join(" ")} sizes={"20"} src={homeCoach.avatar}/>
                        <Typography
                            className={[classes.title, "col"].join(" ")} variant={"body2"}>
                            <small>
                                {homeCoach.fa_name !== "" ? homeCoach.fa_name : homeCoach.name}
                            </small>
                        </Typography>

                        <Typography
                            className={[classes.title, "col"].join(" ")} variant={"body2"}>
                            {homeFormation}
                        </Typography>

                    </div>
                </div>
                <div className={classes.HomeTeam}>

                    <Defender Players={Players} home={true}
                              goToplayer={this.handleGoToPlayer}/>

                    <Middle Players={Players} home={true} goToplayer={this.handleGoToPlayer}/>

                </div>

                <div>
                    <img alt={homeFlag} className={classes.HomeFlagImage} src={homeFlag}/>
                </div>

                <Forward HomePlayers={Players} AwayPlayers={awayPlayers} home={false}
                         goToplayer={this.handleGoToPlayer}/>

                <div>
                    <img alt={awayFlag} className={classes.AwayFlagImage} src={awayFlag}/>
                </div>

                <div className={classes.AwayTeam}>

                    <Middle Players={awayPlayers} home={false} goToplayer={this.handleGoToPlayer}/>

                    <Defender Players={awayPlayers} home={false}
                              goToplayer={this.handleGoToPlayer}/>

                </div>

                <div className={classes.CoachAway}>
                    <div className={'row m-0 p-0 rtl'}>

                        <Typography
                            className={[classes.title, "text-left col"].join(" ")} variant={"body2"}>
                            {awayFormation}
                        </Typography>

                        <Typography
                            className={[classes.title, "col"].join(" ")} variant={"body2"}>
                            <small>
                                {awayCoach.fa_name !== "" ? awayCoach.fa_name : awayCoach.name}
                            </small>
                        </Typography>

                        <Avatar className={[classes.avatar].join(" ")} sizes={"20"} src={awayCoach.avatar}/>
                    </div>
                </div>
            </div>
        </div>;
    }

    chunkPlayers(startNumber, endNumber, players, formation) {

        let Players = [];

        let Keeper = players.slice(parseInt(startNumber, 0), parseInt(endNumber, 0) + 1);

        let Defenders = players.slice(
            1,
            parseInt(formation[0], 0) + 1
        );

        let HalfBack = [];

        let BeforeForward = [], Forward = [], BeforeHalfBack = [];

        if (formation.length > 3) {
            if (formation.length === 5) {
                BeforeHalfBack = players.slice(
                    parseInt(formation[0], 0) + 1,
                    parseInt(formation[1], 0) + parseInt(formation[0], 0) + 1,
                );

                HalfBack = players.slice(
                    parseInt(formation[0], 0) + 1 + parseInt(formation[1], 0),
                    parseInt(formation[2], 0) + parseInt(formation[1], 0) + parseInt(formation[0], 0) + 1,
                );

                BeforeForward = players.slice(
                    parseInt(formation[0], 0) + 1 + parseInt(formation[1], 0) + parseInt(formation[2], 0),
                    parseInt(formation[3], 0) + parseInt(formation[2], 0) + parseInt(formation[1], 0) + parseInt(formation[0], 0) + 1,
                );

                Forward = players.slice(
                    parseInt(formation[0], 0) + 1 + parseInt(formation[1], 0) + parseInt(formation[2], 0) + parseInt(formation[3], 0),
                    parseInt(formation[4], 0) + parseInt(formation[3], 0) + parseInt(formation[2], 0) + parseInt(formation[1], 0) + parseInt(formation[0], 0) + 1,
                );
            }
            else {

                HalfBack = players.slice(
                    parseInt(formation[0], 0) + 1,
                    parseInt(formation[1], 0) + parseInt(formation[0], 0) + 1,
                );

                BeforeForward = players.slice(
                    parseInt(formation[0], 0) + 1 + parseInt(formation[1], 0),
                    parseInt(formation[2], 0) + parseInt(formation[1], 0) + parseInt(formation[0], 0) + 1,
                );

                Forward = players.slice(
                    parseInt(formation[0], 0) + 1 + parseInt(formation[1], 0) + parseInt(formation[2], 0),
                    parseInt(formation[3], 0) + parseInt(formation[2], 0) + parseInt(formation[1], 0) + parseInt(formation[0], 0) + 1,
                );
            }
        }
        else {
            HalfBack = players.slice(
                parseInt(formation[0], 0) + 1,
                parseInt(formation[1], 0) + parseInt(formation[0], 0) + 1,
            );

            Forward = players.slice(
                parseInt(formation[0], 0) + 1 + parseInt(formation[1], 0),
                parseInt(formation[2], 0) + parseInt(formation[1], 0) + parseInt(formation[0], 0) + 1,
            );
        }


        Players.push({
            Keeper: Keeper,
            Defenders: Defenders,
            BeforeHalfBack: BeforeHalfBack,
            HalfBack: HalfBack,
            BeforeForward: BeforeForward,
            Forward: Forward,
        });

        return Players[0];
    }

}

export default withStyles(styles)(SoccerField);