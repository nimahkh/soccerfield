import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import grey from "@material-ui/core/colors/grey";
import Typography from "@material-ui/core/Typography/Typography";
import {Avatar} from "@material-ui/core/index";
import {Animated} from "react-animated-css";
import ProgressiveImage from 'react-progressive-image';
import AvatarIcon from "../../assets/img/avatar.png";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        textAlign: 'center',
        width: '50%',
        margin: '0 auto',
        color: "#ffffff",
        lineHeight: '15px',
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
    },
    avatar: {
        margin: '0 auto',
        boxShadow: '0px 2px 2px 0px #cccccc',
        borderRadius: "50%"
    },
    deactivate: {
        background: "rgba(125, 46, 46, .7)",
        border: "1px solid rgba(125, 46, 46,1)",
    },
    ltr: {
        direction: 'ltr'
    }
});

class PlayerSoccer extends Component {

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
        const {classes, data, position , home} = this.props;
        let random=0;
        if(home){
            if(position==="gk")
                random=0.5;
            if(position==="df")
                random=1;
            if(position==="bhf")
                random=1.5;
            if(position==="hb")
                random=2;
            if(position==="bf")
                random=2.5;
            if(position==="fw")
                random=3;
        }

        else{
            if(position==="gk")
                random=5.5;
            if(position==="df")
                random=6;
            if(position==="bhf")
                random=6.5;
            if(position==="hb")
                random=7;
            if(position==="bf")
                random=7.5;
            if(position==="fw")
                random=8
        }
        //const random=2.5;
        const avatar=data.avatar;

        return <div className={"col m-0 p-0"} onClick={this.handleClick}>
            <Animated
                style={{
                    animationDuration: `${random}s`,
                    msAnimationDuration: `${random}s`,
                    WebkitAnimationDuration: `${random}s`,
                    MozAnimationDuration: `${random}s`,
                    OAnimationDuration: `${random}s`
                }}
                className={"m-auto"} animationIn="bounceInDown" isVisible={true}>
                <div className={'col m-0 p-0'}>
                    <ProgressiveImage src={avatar} placeholder={AvatarIcon}>
                        {(avatar) => <Avatar className={classes.avatar} sizes={"20"} src={avatar}/>}
                    </ProgressiveImage>
                    <Typography
                        className={[classes.title].join(" ")} variant={"body2"}>
                        <small>{data.fa_name !== "" ? data.fa_name : data.name}</small>
                    </Typography>
                </div>
            </Animated>
        </div>
    }

}

export default withStyles(styles)(PlayerSoccer);