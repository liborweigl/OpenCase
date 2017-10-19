export class Entity implements  IEntity
{
    //productId: number;
    email: string;
    name: string;
    surname: string;
    //uniqueId: string;
    //type: number;
    //starRating: number;
    //imageUrl: string;
    //address: IAddress;

}

export interface IEntity {
    //productId: number;
    email: string;
    name: string;
    surname: string;
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
