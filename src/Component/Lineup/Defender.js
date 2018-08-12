import React, {Component} from 'react';
import PlayerSoccer from "./PlayerSoccer";
import withStyles from "@material-ui/core/styles/withStyles";
import KeeperField from "../../assets/img/keeper_field.png";

const styles = theme => ({
    CenterField: {
        margin: '0 auto'
    },
    SoccerField: {
        backgroundColor: theme.palette.primary.light,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: 'auto'
    },
    KeeperField: {
        position: "absolute"
    },
    KeeperFieldAway: {
        position: "absolute",
        transform: "rotate(180deg)",
        bottom: 0
    },
    KeeperFieldImg: {
        width: '100%',
        height: 'auto'
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
    TopKeeper: {
        paddingTop: 45
    },
    DownKeeper: {
        paddingBottom: 45
    }

});

class Defender extends Component {
    goaldkeeper = (Players, home) => {
        const {classes} = this.props;
        return (
            <div className={classes.Keeper}>
                <PlayerSoccer position={"gk"} data={Players.Keeper[0]} home={home}/>
            </div>
        )
    };

    defender = (Players, home) => {

        return (
            <div className={['row', home ? 'mt-4' : 'mb-3'].join(" ")}>
                {
                    Players.Defenders.map((item, i) => (
                        <PlayerSoccer position={"df"} key={i} data={Players.Defenders[i]} home={home}/>
                    ))
                }
            </div>
        );
    };

    render() {
        const {home, Players, classes} = this.props;

        return <div>
            <div className={home ? classes.KeeperField : classes.KeeperFieldAway}>
                <img alt={"defender"} src={KeeperField} className={classes.KeeperFieldImg}/>
            </div>
            {home ?
                <div className={classes.TopKeeper}>
                    {this.goaldkeeper(Players, home)}
                    {this.defender(Players, home)}
                </div>
                :
                <div className={classes.DownKeeper}>
                    {this.defender(Players, home)}
                    {this.goaldkeeper(Players)}
                </div>
            }
        </div>;
    }
}

export default withStyles(styles)(Defender);