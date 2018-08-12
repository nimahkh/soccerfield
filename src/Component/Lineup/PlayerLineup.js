import React, {Component} from 'react';
import {Avatar} from "@material-ui/core/index";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";

const styles = theme => ({
    avatar: {
        margin: '0 auto',
        //background: "rgba(46, 125, 50, .7)",
        //border: "1px solid rgba(46, 125, 50,1)",
        borderRadius: "50%",
        boxShadow: '0px 2px 2px 0px #999',
    },
    title: {
        textAlign: 'center'
    },

    ltr: {
        direction: 'ltr'
    },
    cardShadow: {
        boxShadow: '0px 2px 2px 0px #cccccc'
    }
});

class PlayerLineup extends Component {

    handleClick = () => {
        this.props.goToPlayer(this.props.data)
    };

    render() {
        const {classes, data, home} = this.props;

        return <div className={"container mb-3"}>

            {home ?
                <div className={["row", classes.cardShadow].join(" ")} onClick={this.handleClick}>
                    <div className={"col-12 text-center mt-2 ml-0 pl-1"}>
                        <Avatar className={[
                            classes.avatar
                        ].join(' ')} sizes={"70"} src={data.avatar}/>
                        <Typography
                            className={[
                                classes.title,
                                data.fa_name === "" && classes.ltr
                            ].join(' ')} variant={"body2"} noWrap>
                            <small>{data.fa_name !== "" ? data.fa_name : data.name}</small>
                        </Typography>
                        <Typography variant={"caption"}>
                            {data.position ? "position" : "Coach"}
                        </Typography>
                    </div>
                </div> :

                <div className={["row", classes.cardShadow].join(" ")} onClick={this.handleClick}>
                    <div className={"col-12 text-center mt-2 ml-0 pl-1"}>
                        <Avatar className={[
                            classes.avatar
                        ].join(' ')} sizes={"70"} src={data.avatar}/>

                        <Typography className={[
                            classes.title,
                            data.fa_name === "" && classes.ltr
                        ].join(' ')} variant={"body2"} noWrap>
                            <small>{data.fa_name !== "" ? data.fa_name : data.name}</small>
                        </Typography>
                        <Typography variant={"caption"}>
                            {data.position ? "position" : "Coach"}
                        </Typography>
                    </div>
                </div>
            }
        </div>
    }
}

export default withStyles(styles)(PlayerLineup);