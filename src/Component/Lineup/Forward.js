import React, {Component} from 'react';
import PlayerSoccer from "./PlayerSoccer";
import withStyles from "@material-ui/core/styles/withStyles";
import CenterField from "../../assets/img/center_of_field.png";

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
    ForwardField: {
        position: "absolute"
    },
    ForwardFieldImg: {
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
        paddingTop: 5
    },
    DownKeeper: {
        paddingBottom: 5
    }

});

class Forward extends Component {
    Forward = (Players, home) => {

        return (
            <div className={['row', 'mt-2'].join(" ")}>
                {
                    Players.Forward.map((item, i) => (
                        <PlayerSoccer position={"fw"} key={i} data={Players.Forward[i]} home={home}/>
                    ))
                }
            </div>
        )
    };

    render() {
        const { AwayPlayers, HomePlayers, classes} = this.props;
        return <div>
            <div className={classes.ForwardField}>
                <img alt={"Forward"} src={CenterField} className={classes.ForwardFieldImg}/>
            </div>

            <div className={classes.TopKeeper}>
                {this.Forward(HomePlayers, true)}
            </div>

            <div className={classes.DownKeeper}>
                {this.Forward(AwayPlayers, false)}
            </div>
        </div>;
    }
}

export default withStyles(styles)(Forward);