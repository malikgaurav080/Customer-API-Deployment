const service = require('../services/customerService');

function GetAllCustomers(req, res) { 
    service.GetAllCustomers().then(data => {
        res.status(200).send(data);
    })
}

function GetCustomerById(req, res) {
    service.GetCustomerById(req.params.id).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(404).send({status: 404, message: err.message});
    })
}

function AddCustomer(req, res) {
    service.AddCustomer(req.body).then(data => {
        res.status(201).send({ status: 201, message: 'Customer Details Saved Successfully' });
    }).catch(err =>{
        res.status(409).send({status: 409, message: err.message});
    })
}

function UpdateCustomerById(req, res) {
    service.UpdateCustomerById(req.params.id, req.body).then(data => {
        res.status(200).send({ status: 200, message: 'Customer Details Updated Successfully' });
    }).catch(err =>{
        res.status(404).send({status: 404, message: err.message});
    })
}

function DeleteCustomerById(req, res){
    service.DeleteCustomerById(req.params.id).then(data => {
        res.status(200).send({ status: 200, message: 'Customer Details Deleted Successfully' });
    }).catch(err =>{
        res.status(404).send({status: 404, message: err.message});
    })
}

module.exports = { GetAllCustomers, AddCustomer, GetCustomerById, UpdateCustomerById, DeleteCustomerById }