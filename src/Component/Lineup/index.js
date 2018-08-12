import React, {Component} from 'react';
import LineupCard from "./LineupCard";
import SoccerField from "./SoccerField";

const styles = {
    RightCol: {
        minHeight: 400,
    },
    LeftCol: {
        minHeight: 400
    }
};

class Lineup extends Component {

    handleGoToPlayer = (player) => {
        console.log(player)
    };

    handleGoToCoach = (coach) => {
        console.log(coach);
    };

    constructor(props) {
        super(props);

        this.state = {
            result: [],
            actives: [],
            deactives: [],
            coaches: [],
            formations: [],
        };
        this.chunkList = this.chunkList.bind(this);

        this.handelMatchFact = this.handelMatchFact.bind(this);
    }

    componentDidMount() {
        this.handelMatchFact();
    }

    handelMatchFact() {

        const {result}=this.props.result;
        const TeamDetail = this.chunkList(result);

        this.setState({
            result:result,
            coaches: {'home': result.home.coach, 'away': result.away.coach},
            formations: {'home': result.home.formation, 'away': result.away.formation},
            deactives: TeamDetail[0],
            actives: TeamDetail[1]
        })
    }

    render() {
        const {actives, deactives, coaches, formations} = this.state;
        const {homeFlag, awayFlag} = this.props;

        return <div className={"container p-0 m-0"}>
            {this.state.result.length !== 0 &&
                <div className={"row m-0 p-0"}>
                    <SoccerField
                        homeFlag={homeFlag}
                        awayFlag={awayFlag}
                        home={actives.home}
                        away={actives.away}
                        homeFormation={formations.home}
                        awayFormation={formations.away}
                        homeCoach={coaches.home}
                        awayCoach={coaches.away}
                    />
                    <div className={"col-6 text-right pl-0 pr-0 border-left"} style={styles.RightCol} id={"Right"}>
                        <LineupCard goToPlayer={this.handleGoToPlayer}
                                    goToCoach={this.handleGoToCoach}
                                    home={true}
                                    dataDeactive={deactives.home}
                        />
                    </div>

                    <div className={"col-6 text-left pl-0 pr-0"} style={styles.LeftCol} id={"Left"}>
                        <LineupCard
                            goToPlayer={this.handleGoToPlayer}
                            goToCoach={this.handleGoToCoach}
                            home={false}
                            dataDeactive={deactives.away}
                        />
                    </div>
                </div>
            }
        </div>
    }


    chunkList(result) {

        var homeActives = [], homeDeactives = [];
        var awayActives = [], awayDeactives = [];
        var actives = [], deactives = [], teams = [];
        //Actives
        result.home.player.map((item) => {
            if (item.active === 0) {
                homeActives.push(item);
            }
            else if (item.active === 1) {
                homeDeactives.push(item);
            }
            return true;
        });

        //Deactives

        result.away.player.map((item) => {
            if (item.active === 0) {
                awayActives.push(item);
            }
            else if (item.active === 1) {
                awayDeactives.push(item);
            }
            return true;
        });

        actives.push({home: homeActives, away: awayActives});
        deactives.push({home: homeDeactives, away: awayDeactives});
        teams.push(actives[0], deactives[0]);

        return teams;
    }
}

export default Lineup;