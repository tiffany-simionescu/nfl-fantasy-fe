import React from "react";
import {Card} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function ResultsCard({playersname, position, rankPrediction, weekPredict, weekActual, isWinner, weekNum}) {
    return (
        <div class="ui cc_cursor centered card">
            <Card>
                <Card.Content class="">
                    <Card.Header>
                        {playersname}
                    </Card.Header>
                    <Card.Meta>
                        position: {position}
                    </Card.Meta>
                    <Card.Content>
                        week {weekNum} actual: {weekActual}
                    </Card.Content>
                    <Card.Content>
                        week {weekNum} predict: {weekPredict}
                    </Card.Content>
                    <Card.Content>
                        rank prediction: {rankPrediction}
                    </Card.Content>
                    <Card.Content>
                        {isWinner==true ? 'winner' : 'loser'}
                    </Card.Content>
                </Card.Content>

            </Card>
        </div>
    )
}

