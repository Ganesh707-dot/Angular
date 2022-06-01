

export class User {
    constructor(public userName: string,
        public password: string,
        private modifiedDateTime: Date,
        private modifiedSource: string) { }
}