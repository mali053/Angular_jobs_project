import { jobFields } from "./jobFileds"

export interface Job{
    jobField:jobFields
    name:string
    scopeOfHours:number
    area:string
    requirements:string
    workingFromHome: boolean
}