export class PetQR {
    id?: number;
    petName?: string;
    petBirthdayDate?: string;
    petDescription?: string;


    ownerName?: string;
    phoneNumber?: string;
    phoneNumberOther?: string;
    email?: string;//agregar un combo de opciones
    socialNetworksDescription?: string;
    observation?: string;
}

export class PetQRInfotmation extends PetQR {

}

export class PetQRForm extends PetQR {

}