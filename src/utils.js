import { programs } from "./data";

export const generateRandNr = (min,max) => {
    return Math.floor(Math.random() * (max-min+1)) + min
}

export const getCategories = (programs) => {
    return ["összes", ...new Set(programs.map((obj) => obj.category))];
}

export const getPrograms = (categ) => {
    return categ == "összes" ? programs : programs.filter(({category}) => categ == category)
}