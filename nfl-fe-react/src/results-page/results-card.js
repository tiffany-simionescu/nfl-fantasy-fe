import React from "react";
import {Card} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function ResultsCard({playersname}) {
    return (
        <div>
        <Card>
            <Card.Content>
                <Card.Header>
                    {playersname}
                </Card.Header>
            </Card.Content>
        </Card>
        {/* <Card>
            <Card.Content>
                <Card.Header>
                    {player1name}
                </Card.Header>
            </Card.Content>
        </Card> */}
        </div>
    )
}