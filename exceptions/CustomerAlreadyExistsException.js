class CustomerAlreadyExistsException extends Error {
    constructor(id) {
        super(`Customer with specified id: ${id} already exists`);
    }
} 

module.exports = CustomerAlreadyExistsException;