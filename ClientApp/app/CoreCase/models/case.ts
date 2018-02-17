export class Case implements ICase
{
    caseId: number;
    caseTypeId: number;
    title: string;
    note: string;
    createDate: Date;
    logDate: Date;
    closeDate: Date;

}

    //uniqueId: string;
    //type: number;
    //starRating: number;
    //imageUrl: string;
    //address: IAddress;



export interface ICase {
    //productId: number;
    caseId: number;
    caseTypeId: number;
    title: string;
    note: string;
    createDate: Date;
    logDate: Date;
    closeDate: Date;

    //uniqueId: string;
    //type: number;
    //starRating: number;
    //imageUrl: string;
    //address: IAddress;
}

export interface IAddress
{
    adddress: string;
    adddress2: string;
    city: string;
    country: string;
    postalCode: string;
}
