const customer = require('../models/customer');
function GetAllCustomers() {
    return new Promise((resolve, reject) => {
        customer.find({}, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        })
    });
} 

function GetCustomerById(id) {
    return new Promise((resolve, reject) => {
        customer.findById(id, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        })
    });
}

function AddCustomer(customerBody) {
    return new Promise((resolve, reject) => {
        new customer({
            _id: customerBody.id,
            firstname: customerBody.firstname,
            lastname: customerBody.lastname,
            email: customerBody.email,
            city: customerBody.city
        }).save((err) => {
            if (!err) {
                resolve();
            } else {
                reject(err);
            }
        })
    });
}

function UpdateCustomerById(id, customerBody) {
    return new Promise((resolve, reject) => {
        customer.findByIdAndUpdate(id, {
            _id: customerBody.id,
            firstname: customerBody.firstname,
            lastname: customerBody.lastname,
            email: customerBody.email,
            city: customerBody.city
        }, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        })
    })
}

function DeleteCustomerById(id){
    return new Promise((resolve, reject)=>{
        customer.deleteOne({_id: id}, (err, data)=>{
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        })
    })
}

module.exports = { GetAllCustomers, AddCustomer, GetCustomerById, UpdateCustomerById, DeleteCustomerById }