// import { HAMMER_LOADER } from '@angular/platform-browser';

export class Student {
    private name: string;
    private address: string;
    private phones: Array<Phone> = [];
    private studies: string;

    constructor() {

    }
    public setName(nm: string) {
        this.name = nm;
    }

    public setAddress(addr: string) {
        this.address = addr;
    }

    public setPhones(homePhone: string, workPhone: string) {
        let phone = new Phone(homePhone, workPhone);
        console.log(phone);
        this.phones.push(phone);
        console.log(this.phones);
    }

    public clearPhoneList() {
        this.phones = [];
    }

    public setStudies(std: string) {
        this.studies = std;
    }
}

class Phone {
    private home: string;
    private work: string;

    constructor(homePhone = '', workPhone = '') {
        this.home = homePhone;
        this.work = workPhone;
    }
}