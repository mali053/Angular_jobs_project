import { JobFileds } from "./jobFileds"

export interface Job{
    jobFileds:JobFileds
    name:string
    scopeOfHours:number
    area:string
    requirements:string
    workingFromHome: boolean
}