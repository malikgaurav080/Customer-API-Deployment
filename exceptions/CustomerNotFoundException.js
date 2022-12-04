class CustomerNotFoundException extends Error {
    constructor(id) {
        super(`Customer with specified id: ${id} does not exists`);
    }
} 

module.exports = CustomerNotFoundException;