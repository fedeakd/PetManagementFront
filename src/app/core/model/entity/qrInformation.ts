export class PetQR {
    id?: number;
    petName?: string;
    petSex?: number; //combo de eleccion
    petBirthdayDate?: string;
    petOfBread?: string;
    petDescription?: string;


    ownerName?: string;
    ownerSurName?: string;
    ownerPhoneNumber?: string;
    ownerPhoneNumberOther?: string;
    ownerPhoneNumberOtherTwo?: string;
    ownerAddress?: string;
    ownerEmail?: string;//agregar un combo de opciones
    ownerObservation?: string;
}

export class PetQRInfotmation extends PetQR {

}

export class PetQRForm extends PetQR {

}