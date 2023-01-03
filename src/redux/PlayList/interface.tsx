import { IRecordStore } from "../RecordStore/interface"
export interface IPlayList {
    id?: string
    image: string
    namePlayList: string
    numberPlayList: string
    timePlayList: string
    description: string
    topic: string[]
    published: boolean
    listRecord: IRecordStore[]
}