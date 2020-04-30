import React from "react";
import {Card} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function ResultsCard({playersname, position, rankPrediction, week_1}) {
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
                        rank prediction: {rankPrediction}
                    </Card.Content>
                    <Card.Content>
                        week 1 predict: {week_1}
                    </Card.Content>
                </Card.Content>

            </Card>
        </div>
    )
}