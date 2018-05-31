import { DateTime } from "ionic-angular";

export class Words{
    id: number;
    word: string;
    description: string;
    country:string;
    publishedDate:DateTime;
    uploadDate:DateTime;
    active:boolean;

}