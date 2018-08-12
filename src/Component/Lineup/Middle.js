import React, {Component} from 'react';
import PlayerSoccer from "./PlayerSoccer";
import withStyles from "@material-ui/core/styles/withStyles";

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
        paddingTop: 5
    },
    DownKeeper: {
        paddingBottom: 5,
        position: 'relative',
        zIndex: 9
    }

});

class Middle extends Component {
    HalfBack = (Players, home) => {

        return (
            <div className={['row', home ? 'mt-4' : 'mb-4'].join(" ")}>
                {
                    Players.HalfBack.map((item, i) => (
                        <PlayerSoccer position={"hb"} key={i} data={Players.HalfBack[i]} home={home}/>
                    ))
                }
            </div>
        )
    };

    BeforeForward = (Players, home) => {

        return (
            <div className={['row', home ? 'mt-2' : 'mb-1'].join(" ")}>
                {
                    Players.BeforeForward.map((item, i) => (
                        <PlayerSoccer position={"bf"} key={i} data={Players.BeforeForward[i]} home={true}/>
                    ))
                }
            </div>
        );
    };

    BeforeHalfBack = (Players, home) => {

        return (
            <div className={['row', home ? 'mt-2' : 'mb-1'].join(" ")}>
                {
                    Players.BeforeHalfBack.map((item, i) => (
                        <PlayerSoccer key={i} position={"bhf"} data={Players.BeforeHalfBack[i]} home={true}/>
                    ))
                }
            </div>
        );
    };

    render() {
        const {home, Players, classes} = this.props;
       // console.log(Players);
        return <div>
            {home ?
                <div className={classes.TopKeeper}>
                    {this.BeforeHalfBack(Players, home)}
                    {this.HalfBack(Players, home)}
                    {this.BeforeForward(Players, home)}
                </div>
                :
                <div className={classes.DownKeeper}>
                    {this.BeforeForward(Players, home)}
                    {this.HalfBack(Players, home)}
                    {this.BeforeHalfBack(Players, home)}
                </div>
            }
        </div>;
    }
}

export default withStyles(styles)(Middle);