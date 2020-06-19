import React from "react";

import MAE from "../styling/images/MAE.png";
import PercentCorrect from "../styling/images/PercentCorrect.png"; 

const AnalyticsPage = () => {
    return (
        <div className="AnalyticsPage">
            <div className="Intro">
            <h1>Methodology</h1> 
            <h3>Introduction</h3> 
            <p>NFL fantasy football is a game in which football fans take on the role of the coach or general manager of a pro football team. Partipants draft their initial teams, select players to play each week and trade players in order to compete weekly during a season against other teams. The winning teams are determined by the real-life statistics of the pro athletes. Goal of the Trade Analyzer
            The goal of the trade analyzer is to determine if a proposed trade of one or more players is a “good” or “bad” trade during any week of the 2019 football season. A good trade is defined as trading a player on your team for a player with higher expected fantasy football points. The goal, therefore, is to determine the expected fantasy football points of each pro football player for each week of the 2019 season. The expected points can then be compared between players. </p> 
            <h3>The Points System</h3> 
            <p>The trade analyzer uses the ESPN Standard League rules for determining fantasy football points. A team consists of 9 starters in 7 position. The 7 postions are quarterback(QB), running back(RB), wide receiver(WR), tight end(TE), kicker(K) and team defense(DF). A team’s defensive squad is considered one “player” in fantasy football. <br/> See <a href='https://nfl-trade.herokuapp.com'> nfl-trade.herokuapp.com</a> 
            {/* for the table that should go here (data for the table is the section below) */}
            <br/> 
            {/* QB/RB/WR/TEKickersDefense and Special Teams6 pts rush or receive TD5 pts 50+ yard FG made6 pts def/special teams TD6 pts returning kick/punt for TD4 pts 40-49 yard FG made2 pts interception6 pts player ret/rec fumble for TD3 pts FG made 39 yards or less2 pts fumble recovery4 pts passing TD2 pts rush/pass/rec 2 pt. conv2 pts blocked punt/PAT/FG2 pts rush/receive 2 pt. conv1 pt extra point made2 pts safety2 pts passing 2 pt. conversion-1 pt missed FG4 pts 1-6 points allowed1 pts 10 yards rush or receive3 pts 7-13 points allowed1 pt 25 yards passing1 pts 14-17 points allowed2 pts rush or receive TD of 40+ yds0 pts 18-27 points allowed2 pts passing TD of 40+ yds-1 pts 28-34 points allowed-2 pts interception-3 pts 35-45 points allowed-2 pts fumble lost-5 pts 46+ points allowed1 pt per sack */}
            </p> <br/>
            </div>
            <div className="Data">
            <h3>Data</h3> 
            <p>The data used for modeling came from ArmchairAnalysis.com. The data consists of over 700+ data points over 28 different excel tables providing 20 years of detailed stats for every player in the NFL since the year 2000. The raw data was initially manipulated in Excel in order to link and extract the relevant data for all 2019 NFL players. The manipulated data formed the basis for the initial modeling data. From the initial modeling data the actual fantasy football points were calculated for each game of each season for every 2019 player. The training data for the models used all the data available for each player up through the 2018 season with the 2019 data used as the test data. For example, if a player begin his pro career in 2014, then 2014 - 2018 data was used for training data and 2019 data was used for test data.</p> <br/>
            </div>
            <div className="Modeling">
            <h3>Modeling</h3> 
            <p>A total of four models were employed in predicting expected fantasy football points for 653 2019 NFL players. The data is essentially time-series data with players having anywhere from 0 to 20 years (20 seasons x 16 games = 320 data points) of data. <br />
            1. Average - A baseline measure was established using an average for each 2019 player. The week 1 average was established using the average points per game for the players during the 2018 season (excluding rookies). Weeks 2 through 17 were calculated using the average of their actual performance from previous weeks (e.g. week 2 used week 1 actual performance, week 3 used the average of week 1 and 2 actuals, etc.). This would be considered the naive approach and one often used by the average fantasy football participant. <br/>
            2 .XGBoost - An XGBoost model was used to predict rookie player performance in week 1 of the 2019 season. The 106 2019 rookies are difficult to predict as they have no professional experience. Using the rookie year stats for the 515 non-rookie players (excluding defense) as training data, week 1 expected fantasy points for the 2019 season were calculated with a validation MAE of 28.93 and R-squared of .49 and a test MAE of 30.75 and R-squared of .43. These were weak results, but a starting point was needed. Weeks 2 through 17 were calculated using the average of their actual performance from previous weeks - the same as the baseline (e.g. week 2 used week 1 actual performance, week 3 used the average of week 1 and 2 actuals, etc.). <br />
            3. ARIMA - An ARIMA model was initially used to predict veteran player performance for each week in the 2019 season. Only veteran players with over 3 years of experience and at least 50 points during the 3 years were run using ARIMA as the model needs about 50 data points (3 seasons x 16 games = 48 data points) to perform well. About 246 veteran players were modeled using ARIMA and while the results were very good (see the graphs) and beat the baseline, the neural network model showed better results.
            4. Recurrent Neural Network, Long Short-Term Memory (RNN-LSTM) - A RNN-LSTM model was used to predict veteran player performance for each week in the 2019 season. Only veteran players with over 3 years of experience and at least 50 points during the 3 years were run using RNN-LSTM as the model needs as much data as possible and 3 years seemed to be a good balance. About 246 veteran players were modeled using RNN-LSTM and the results compared to the ARIMA model. The RNN-LSTM model outperformed both the baseline average and the ARIMA models and was the model used in the final app.
            </p> <br />
            </div>  
            <div className="Notes">
            <h3>Notes:</h3> 
            <p>
            Final Results - The final results combine the rookie results(XGBoost+Average - 106 players), the veterans with 3+ years(RNN-LSTM - 278 players including defense) and the remaining veterans with more than 3 years experience(Average - 269 players). This is referred to as the “NN” model in the Evaluate tab and the “ARIMA” is the same combination of results only using ARIMA for the veterans with 3+ years. <br />
            2. Weekly Predictions - The models each calculate predictions for each of the remaining weeks of the season. Each remaining week is then summed to arrive at the players expected fantasy football points. For example, in week 1 the expected fantasy football points are the sum of all 16 game predictions (the entire season), in week 2 the points are the sum of the 15 remaining games, etc. 
            3. Bye Weeks - There are actually 17 weeks in a football season and each team has a random bye week during the season. On bye weeks, each player’s prediction from the week before is simply carried forward. <br />
            4. Injuries - Injuries play a huge role in fantasy football. When a player is injured his points essentially fall to zero. There is no reliable way to forecast if or when a player will get injured. While the raw data does provide some details on injuries, it still does not provide good information on when a player will return from an injury. In all the models, when a player goes on injured reserve status, he is assumed to be out for the season. <br />
            <h3>An Evaluation of the Model Predictions</h3> <br/>
            The Recurrent Neural Network - LSTM Model(NN) outperforms both the baseline Average and ARIMA models. While both the NN and ARIMA models have lower MAEs they all start to converge about halfway through the season as all models incorporate the current season actual points and the number of future predictions are reduced thereby increasing accuracy in all the models. The real accuracy of the models are shown in the Percent of Correct Predictions graph. For each week, the predicted outcome of a “good” or “bad” trade for each player is calculated against every other player and compared with the actual outcome. The NN clearly makes better predictions over the other models with an overall average correct percentage of 85.59% for the 2019 season compared with 84.72% for an ARIMA model and 83.17% for the baseline average model. </p> <br/>
            </div>
        <div className="graphs">
            <div className="image-1">
                <img src={MAE} alt="Mean Average Error for Each Model" height="500px" />
            </div>
            <div className="image-2">
                <img src={PercentCorrect} alt="Percent of Correct Predictions for Each Model" height="500px" />
            </div>
        </div>
        </div>
    )
}

export default AnalyticsPage; 