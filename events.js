const EventEmitter = require('events');
class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
        console.log('in person ctr %s', this._name);
    }

    get name(){
        return this._name;
    }
}

module.exports = {Person : Person};