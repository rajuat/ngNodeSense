import { Address } from './models';

export abstract class IContactService {   
    getBranches: () => Array<Address>;
    addBranch: (branch: Address) => void;
}