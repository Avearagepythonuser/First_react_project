import { programs } from "../data.js"
import { Card } from "@heroui/react";
import { ProgramsCateg } from "./ProgramsCateg.jsx";
import { getCategories, getPrograms } from "../utils.js";
import { useState } from "react";

export function Programs() {
    const [selectedPrograms, setSelectedPrograms] = useState(getPrograms("összes"))
    return (
        <div>
            <h2 className="text-center">Iskolai progrmamok</h2>
            <ProgramsCateg categories={getCategories(programs)} setSelectedPrograms={setSelectedPrograms}/>
            <div className="flex flex-wrap gap-5 justify-center">
                {selectedPrograms.map(({id, title, category, price, participants, capacity, indoor}) => 
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