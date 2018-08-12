import React, {Component} from 'react';
import './App.css';
import Lineup from "./Component/Lineup";
import Belgium from "./assets/img/belgium.png";
import France from "./assets/img/france.png";
import './animate.min.css';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';

class App extends Component {

    results = () => {
        const example = {
            "result":
                {
                    "home":
                        {
                            "formation": "4-2-3-1",
                            "coach": {
                                "id": 16,
                                "name": "DIDIER DESCHAMPS",
                                "fa_name": "",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/avatar.png"
                            },
                            "player": [{
                                "id": 11711,
                                "name": "HUGO LLORIS",
                                "fa_name": "\u0647\u0648\u06af\u0648 \u0644\u0648\u0631\u06cc\u0633",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/hugo_lloris.png",
                                "nationality": "\u0641\u0631\u0627\u0646\u0633\u0647",
                                "position": "GOALKEEPER",
                                "shirt": 1,
                                "active": 1
                            }, {
                                "id": 1237,
                                "name": "RAPHAEL VARANE",
                                "fa_name": "\u0631\u0627\u0641\u0627\u0626\u0644 \u0648\u0627\u0631\u0627\u0646",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/raphael_varane.png",
                                "nationality": "\u0641\u0631\u0627\u0646\u0633\u0647",
                                "position": "DEFENDER",
                                "shirt": 4,
                                "active": 1
                            }, {
                                "id": 2601,
                                "name": "SAMUEL UMTITI",
                                "fa_name": "\u0633\u0627\u0645\u0648\u0626\u0644 \u0627\u0648\u0645\u062a\u06cc\u062a\u06cc",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/samuel_umtiti.png",
                                "nationality": "\u0641\u0631\u0627\u0646\u0633\u0647",
                                "position": "DEFENDER",
                                "shirt": null,
                                "active": 1
                            }, {
                                "id": 11712,
                                "name": "LUCAS FRANCOIS BERNARD HERNANDEZ",
                                "fa_name": "\u0644\u0648\u06a9\u0627\u0633 \u0647\u0631\u0646\u0627\u0646\u062f\u0633",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/lucas_francois_bernard_hernandez.png",
                                "nationality": "\u0641\u0631\u0627\u0646\u0633\u0647",
                                "position": "DEFENDER",
                                "shirt": 21,
                                "active": 1
                            }, {
                                "id": 8807,
                                "name": "BENJAMIN PAVARD",
                                "fa_name": "\u0628\u0646\u062c\u0627\u0645\u06cc\u0646 \u067e\u0627\u0648\u0627\u0631\u062f",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/benjamin_pavard.png",
                                "nationality": "\u0641\u0631\u0627\u0646\u0633\u0647",
                                "position": "DEFENDER",
                                "shirt": 2,
                                "active": 1
                            }, {
                                "id": 8140,
                                "name": "BLAISE MATUIDI",
                                "fa_name": "\u0628\u0644\u06cc\u0632 \u0645\u0627\u062a\u0648\u0626\u06cc\u062f\u06cc",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/blaise_matuidi.png",
                                "nationality": "\u0641\u0631\u0627\u0646\u0633\u0647",
                                "position": "MIDFIELDER",
                                "shirt": 14,
                                "active": 1
                            }, {
                                "id": 4102,
                                "name": "PAUL POGBA",
                                "fa_name": "\u067e\u0644 \u067e\u0648\u06af\u0628\u0627",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/paul_pogba.png",
                                "nationality": "\u0641\u0631\u0627\u0646\u0633\u0647",
                                "position": "MIDFIELDER",
                                "shirt": 6,
                                "active": 1
                            }, {
                                "id": 11713,
                                "name": "N GOLO KANTE",
                                "fa_name": "\u0627\u0646\u06af\u0648\u0644\u0648 \u06a9\u0648\u0646\u062a\u0647",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/n_golo_kante.png",
                                "nationality": "\u0641\u0631\u0627\u0646\u0633\u0647",
                                "position": "MIDFIELDER",
                                "shirt": 13,
                                "active": 1
                            }, {
                                "id": 8808,
                                "name": "OLIVIER GIROUD",
                                "fa_name": "\u0627\u0644\u06cc\u0648\u06cc\u0647 \u0698\u06cc\u0631\u0648",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/olivier_giroud.png",
                                "nationality": "\u0641\u0631\u0627\u0646\u0633\u0647",
                                "position": "FORWARD",
                                "shirt": 9,
                                "active": 1
                            }, {
                                "id": 1238,
                                "name": "ANTOINE GRIEZMANN",
                                "fa_name": "\u0622\u0646\u062a\u0648\u0627\u0646 \u06af\u0631\u06cc\u0632\u0645\u0627\u0646",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/antoine_griezmann.png",
                                "nationality": "\u0641\u0631\u0627\u0646\u0633\u0647",
                                "position": "FORWARD",
                                "shirt": 7,
                                "active": 1
                            }, {
                                "id": 11714,
                                "name": "KYLIAN MBAPPE LOTTIN",
                                "fa_name": "\u06a9\u06cc\u0644\u06cc\u0627\u0646 \u0627\u0645\u0628\u0627\u067e\u0647",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/kylian_mbappe_lottin.png",
                                "nationality": "\u0641\u0631\u0627\u0646\u0633\u0647",
                                "position": "FORWARD",
                                "shirt": 10,
                                "active": 1
                            }, {
                                "id": 11715,
                                "name": "STEVEN N ZONZI",
                                "fa_name": "\u0627\u0633\u062a\u06cc\u0648\u0646 \u0627\u0646\u0632\u0648\u0646\u0632\u06cc",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/steven_n_zonzi.png",
                                "nationality": "\u0641\u0631\u0627\u0646\u0633\u0647",
                                "position": "MIDFIELDER",
                                "shirt": 15,
                                "active": 0
                            }, {
                                "id": 7593,
                                "name": "CORENTIN TOLISSO",
                                "fa_name": "\u06a9\u0648\u0631\u0646\u062a\u06cc\u0646 \u062a\u0648\u0644\u06cc\u0633\u0648",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/corentin_tolisso.png",
                                "nationality": "\u0641\u0631\u0627\u0646\u0633\u0647",
                                "position": "MIDFIELDER",
                                "shirt": 12,
                                "active": 0
                            }, {
                                "id": 11717,
                                "name": "PRESNEL KIMPEMBE",
                                "fa_name": "\u067e\u0631\u0633\u0646\u0644 \u06a9\u06cc\u0645\u067e\u0628\u0647",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/presnel_kimpembe.png",
                                "nationality": "\u0641\u0631\u0627\u0646\u0633\u0647",
                                "position": "DEFENDER",
                                "shirt": 3,
                                "active": 0
                            }, {
                                "id": 11718,
                                "name": "THOMAS LEMAR",
                                "fa_name": "\u062a\u0648\u0645\u0627\u0633 \u0644\u0645\u0627\u0631",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/thomas_lemar.png",
                                "nationality": "\u0641\u0631\u0627\u0646\u0633\u0647",
                                "position": "MIDFIELDER",
                                "shirt": 8,
                                "active": 0
                            }, {
                                "id": 5060,
                                "name": "OUSMANE DEMBELE",
                                "fa_name": "\u0639\u062b\u0645\u0627\u0646 \u062f\u0645\u0628\u0644\u0647",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/ousmane_dembele.png",
                                "nationality": "\u0641\u0631\u0627\u0646\u0633\u0647",
                                "position": "FORWARD",
                                "shirt": 11,
                                "active": 0
                            }, {
                                "id": 11719,
                                "name": "STEVE MANDANDA",
                                "fa_name": "\u0627\u0633\u062a\u06cc\u0648 \u0645\u0627\u0646\u062f\u0627\u0646\u062f\u0627",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/steve_mandanda.png",
                                "nationality": "\u0641\u0631\u0627\u0646\u0633\u0647",
                                "position": "GOALKEEPER",
                                "shirt": 16,
                                "active": 0
                            }, {
                                "id": 11720,
                                "name": "ADIL RAMI",
                                "fa_name": "\u0639\u0627\u062f\u0644 \u0631\u0627\u0645\u06cc",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/adil_rami.png",
                                "nationality": "\u0641\u0631\u0627\u0646\u0633\u0647",
                                "position": "DEFENDER",
                                "shirt": 17,
                                "active": 0
                            }, {
                                "id": 11716,
                                "name": "NABIL FEKIR",
                                "fa_name": "\u0646\u0628\u06cc\u0644 \u0641\u062e\u06cc\u0631",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/nabil_fekir.png",
                                "nationality": "\u0627\u0644\u062c\u0632\u0627\u06cc\u0631",
                                "position": "MIDFIELDER",
                                "shirt": 18,
                                "active": 0
                            }, {
                                "id": 11721,
                                "name": "DJIBRIL SIDIBE",
                                "fa_name": "\u062c\u0628\u0631\u0626\u06cc\u0644 \u0633\u06cc\u0633\u0647",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/djibril_sidibe.png",
                                "nationality": "\u0641\u0631\u0627\u0646\u0633\u0647",
                                "position": "DEFENDER",
                                "shirt": 19,
                                "active": 0
                            }]
                        },
                    "away":
                        {
                            "formation": "3-1-2-2-2",
                            "coach": {
                                "id": 30,
                                "name": "ROBERTO MARTINEZ",
                                "fa_name": "",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/avatar.png"
                            },
                            "player": [{
                                "id": 11381,
                                "name": "THIBAUT COURTOIS",
                                "fa_name": "\u062a\u06cc\u0628\u0648 \u06a9\u0648\u0631\u062a\u0648\u0627",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/thibaut_courtois.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "GOALKEEPER",
                                "shirt": 1,
                                "active": 1
                            }, {
                                "id": 11382,
                                "name": "VINCENT KOMPANY",
                                "fa_name": "\u0648\u0646\u0633\u0627\u0646 \u06a9\u0645\u067e\u0627\u0646\u06cc",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/vincent_kompany.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "DEFENDER",
                                "shirt": 4,
                                "active": 1
                            }, {
                                "id": 586,
                                "name": "JAN VERTONGHEN",
                                "fa_name": "\u06cc\u0627\u0646 \u0641\u0631\u062a\u0648\u0646\u06af\u0646",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/jan_vertonghen.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "DEFENDER",
                                "shirt": null,
                                "active": 1
                            }, {
                                "id": 1317,
                                "name": "TOBY ALDERWEIRELD",
                                "fa_name": "\u062a\u0648\u0628\u06cc \u0622\u0644\u062f\u0631\u0648\u0627\u06cc\u0631\u0644\u062f",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/toby_alderweireld.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "DEFENDER",
                                "shirt": null,
                                "active": 1
                            }, {
                                "id": 669,
                                "name": "MOUSSA DEMBELE",
                                "fa_name": "\u0645\u0648\u0633\u06cc \u062f\u0645\u0628\u0644\u0647",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/avatar.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "MIDFIELDER",
                                "shirt": 19,
                                "active": 1
                            }, {
                                "id": 587,
                                "name": "MAROUANE FELLAINI",
                                "fa_name": "\u0645\u0631\u0648\u0627\u0646 \u0641\u0644\u06cc\u0646\u06cc",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/marouane_fellaini.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "MIDFIELDER",
                                "shirt": 8,
                                "active": 1
                            }, {
                                "id": 3718,
                                "name": "AXEL WITSEL",
                                "fa_name": "\u0627\u06a9\u0644 \u0648\u06cc\u062a\u0633\u0644",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/axel_witsel.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "MIDFIELDER",
                                "shirt": 6,
                                "active": 1
                            }, {
                                "id": 588,
                                "name": "NACER CHADLI",
                                "fa_name": "\u0646\u0627\u0635\u0631 \u0634\u0627\u0630\u0644\u06cc",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/nacer_chadli.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "MIDFIELDER",
                                "shirt": 22,
                                "active": 1
                            }, {
                                "id": 11383,
                                "name": "KEVIN DE BRUYNE",
                                "fa_name": "\u06a9\u0648\u06cc\u0646 \u062f\u06cc \u0628\u0631\u0648\u06cc\u0646",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/kevin_de_bruyne.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "MIDFIELDER",
                                "shirt": 7,
                                "active": 1
                            }, {
                                "id": 2600,
                                "name": "EDEN HAZARD",
                                "fa_name": "\u0627\u062f\u0646 \u0647\u0627\u0632\u0627\u0631\u062f",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/eden_hazard.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "FORWARD",
                                "shirt": null,
                                "active": 1
                            }, {
                                "id": 6296,
                                "name": "ROMELU LUKAKU",
                                "fa_name": "\u0631\u0648\u0645\u0644\u0648 \u0644\u0648\u06a9\u0627\u06a9\u0648",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/romelu_lukaku.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "FORWARD",
                                "shirt": 9,
                                "active": 1
                            }, {
                                "id": 7128,
                                "name": "DRIES MERTENS",
                                "fa_name": "\u062f\u0631\u06cc\u0633 \u0645\u0631\u062a\u0646\u0632",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/dries_mertens.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "FORWARD",
                                "shirt": 14,
                                "active": 0
                            }, {
                                "id": 11384,
                                "name": "YANNICK CARRASCO",
                                "fa_name": "\u06cc\u0627\u0646\u06cc\u06a9 \u06a9\u0627\u0631\u0627\u0633\u06a9\u0648",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/yannick_carrasco.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "MIDFIELDER",
                                "shirt": 11,
                                "active": 0
                            }, {
                                "id": 11956,
                                "name": "MICHY BATSHUAYI",
                                "fa_name": "\u0645\u06cc\u06a9\u06cc \u0628\u0627\u062a\u0634\u0648\u0627\u06cc\u06cc",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/michy_batshuayi.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "FORWARD",
                                "shirt": 21,
                                "active": 0
                            }, {
                                "id": 11385,
                                "name": "THOMAS VERMAELEN",
                                "fa_name": "",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/thomas_vermaelen.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "DEFENDER",
                                "shirt": 3,
                                "active": 0
                            }, {
                                "id": 11386,
                                "name": "SIMON MIGNOLET",
                                "fa_name": "\u0633\u0627\u06cc\u0645\u0648\u0646 \u0645\u06cc\u0646\u06cc\u0648\u0644\u0647",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/simon_mignolet.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "GOALKEEPER",
                                "shirt": 12,
                                "active": 0
                            }, {
                                "id": 11387,
                                "name": "KOEN CASTEELS",
                                "fa_name": "\u06a9\u0648\u0626\u0646 \u06a9\u0627\u0633\u062a\u0644\u0632",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/koen_casteels.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "GOALKEEPER",
                                "shirt": 13,
                                "active": 0
                            }, {
                                "id": 11388,
                                "name": "THORGAN HAZARD",
                                "fa_name": "\u062a\u0648\u0631\u06af\u0627\u0646 \u0647\u0627\u0632\u0627\u0631\u062f",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/thorgan_hazard.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "MIDFIELDER",
                                "shirt": 16,
                                "active": 0
                            }, {
                                "id": 11389,
                                "name": "YOERI TIELEMANS",
                                "fa_name": "\u06cc\u0648\u0631 \u062a\u06cc\u0644\u0645\u0646\u0632",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/yoeri_tielemans.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "MIDFIELDER",
                                "shirt": 17,
                                "active": 0
                            }, {
                                "id": 8458,
                                "name": "ADNAN JANUZAJ",
                                "fa_name": "\u0639\u062f\u0646\u0627\u0646 \u06cc\u0627\u0646\u0648\u0632\u0627\u06cc",
                                "avatar": "http://appnad.varzeshavval.com/api2/livescore/storage/img/player/adnan_januzaj.png",
                                "nationality": "\u0628\u0644\u0698\u06cc\u06a9",
                                "position": "FORWARD",
                                "shirt": 18,
                                "active": 0
                            }]
                        }
                }
        };

        return example;
    };

    render() {
        return (
            <div className="App">
                <Lineup
                    homeFlag={France}
                    awayFlag={Belgium}
                    result={this.results()}
                />
            </div>
        );
    }
}

export default App;
