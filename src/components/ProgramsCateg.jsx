import { Tag } from "@heroui/react";
import { TagGroup } from "@heroui/react";
import { getPrograms } from "../utils";

export function ProgramsCateg({categories, setSelectedPrograms}) {

    return (
        <div className="flex flex-col items-center gap-4 text-center">
            <h3>Kategóriák</h3>
            <TagGroup aria-label="Tags" selectionMode="single">
                <TagGroup.List>
                    {categories.map((categ, i) => 
                        <Tag key={i} onClick={() => setSelectedPrograms(getPrograms(categ))}>
                            {categ}
                        </Tag>
                    )}
                    
                </TagGroup.List>
            </TagGroup>
        </div>
    )
}