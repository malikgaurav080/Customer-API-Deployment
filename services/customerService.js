const repo = require('../repository/customerRepository');
const CustomerNotFoundException = require('../exceptions/CustomerNotFoundException');
const CustomerAlreadyExistsException = require('../exceptions/CustomerAlreadyExistsException');

function GetAllCustomers() {
    return new Promise((resolve, reject) => {
        repo.GetAllCustomers().then(data => {
            resolve(data);
        })
    });
} 

function GetCustomerById(id) {
    return new Promise((resolve, reject) => {
        repo.GetCustomerById(id).then(data => {
            if (data == null) {
                reject(new CustomerNotFoundException(id));
            }else{
                resolve(data);
            }
        })
    })
}

function AddCustomer(customerBody) {
    return new Promise((resolve, reject) => {
        repo.GetCustomerById(customerBody.id).then(data => {
            if (data == null) {
                repo.AddCustomer(customerBody).then(data => {
                    resolve();
                })
            } else {
                reject(new CustomerAlreadyExistsException(customerBody.id));
            }
        })
    })
}

function UpdateCustomerById(id, customerBody) {
    return new Promise((resolve, reject) => {
        repo.GetCustomerById(id).then(data => {
            if (data != null) {
                repo.UpdateCustomerById(id, customerBody).then(data => {
                    resolve(data);
                })
            } else {
                reject(new CustomerNotFoundException(id));
            }
        })
    })
}

function DeleteCustomerById(id) {
    return new Promise((resolve, reject) => {
        repo.GetCustomerById(id).then(data => {
            if (data != null) {
                repo.DeleteCustomerById(id).then(data => {
                    resolve(data);
                })
            } else {
                reject(new CustomerNotFoundException(id));
            }
        })
    })
}


module.exports = { GetAllCustomers, GetCustomerById, AddCustomer, UpdateCustomerById, DeleteCustomerById }