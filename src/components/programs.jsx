import { programs } from "../data.js"
import { Card } from "@heroui/react";


export function Programs() {
    return (
        <div>
            <h2>Iskolai progrmamok</h2>
            {/* 
            <ul>
                {programs.map(({id, title}) => {
                    return <li key={id}>{title}</li>
                })}
            </ul>
            */}
            <div className="flex flex-wrap gap-5 justify-center">
                {programs.map(({id, title, category, price, participants, capacity, indoor}) => 
                    <Card variant="default" key={id} className="w-[320px]">
                        <Card.Header>
                            <Card.Title>{title}</Card.Title>
                            <Card.Description>Kategória: {category} - Ár: {price} Ft</Card.Description>
                        </Card.Header>
                        <Card.Content>
                            <p>Kapacitás: {capacity}</p>
                            <p>Még szabad helyek: {capacity-participants}</p>
                            <p>{indoor}</p>
                        </Card.Content>
                    </Card>
                )}
            </div>
        </div>
    )
}