import { useState } from "react"
import { quotesFromDatabase } from "../data"
import { randomIndex19 } from "../utils"
import { Card } from "@heroui/react"

export function RandomQuote({ num }) {
    const quoteElements = quotesFromDatabase[randomIndex19(num)].split("-")

    return (

        <Card className="w-[320px]" variant="default">
            <Card.Header>
                <Card.Title>{quoteElements[1]}</Card.Title>
            </Card.Header>
            <Card.Content>
                <p>{quoteElements[0]}</p>
            </Card.Content>
        </Card>

    )
}