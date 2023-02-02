import { IRecordStore } from "../RecordStore/interface"

export interface IContractAuthorized {
    id?: string
    NumberContract: string
    NameContract: string
    DayEffect: string
    DayExpire: string
    legalAuthorized: string
    NamePersonAuthorized: string
    sex: string
    Birthday: string
    nationality: string
    phone: string
    CMND: string
    DayProviderCMND: string
    PlaceProviderCMND: string
    TaxCode: string
    Place: string
    Email: string
    username: string
    password: string
    NumberAccount: string
    NameBank: string
    listRecord?: string[]
}