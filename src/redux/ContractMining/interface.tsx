import { IUnit } from "../Unit/interface"

export interface IContractMining {
    id?: string
    NumberContract?: string
    NameContract?: string
    DayEffect?: string
    DayExpire?: string
    NameUnitUse?: string
    NameRepresentative?: string
    position?: string
    contractType?: string
    sex?: string
    Birthday?: string
    nationality?: string
    phone?: string
    CMND?: string
    DayProviderCMND?: string
    PlaceProviderCMND?: string
    TaxCode?: string
    Place?: string
    Email?: string
    username?: string
    password?: string
    NumberAccount?: string
    NameBank?: string
    ListUnit?: IUnit[]
}