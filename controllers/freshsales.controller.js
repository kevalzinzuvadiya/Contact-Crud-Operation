const fs_service = require('./../services/freshsales_crm.service');

exports.getContact = async (req, res, next) => {
    try {
        // So accept contact_id as POST parameters in the REST API call along with data_store 
        if(req.body.data_store == 'CRM') {
            const contact = await fs_service.getContact(req.body.contact_id);
            res.send({
                status: true,
                message: 'Success',
                data: contact.data
            })
        } else if(req.body?.data_store === 'DATABASE') {
            throw new Error('DATABASE is supported yet')
        } else {
            throw new Error('Invalid data_Store');
        }
    } catch (err) {
        res.send({
            status: false,
            message: err.message,
            data: err
        })
    }
}

exports.createContact = async (req, res, next) => {
    try {
        if(req.body.data_store == 'CRM') {
            const saved_contact = await fs_service.createContact({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                mobile_number: req.body.mobile_number,
                email: req.body.email,
            })
            
            res.send({
                status: true,
                message: 'Success',
                data: saved_contact.data
            })
        } else if(req.body?.data_store === 'DATABASE') {
            throw new Error('DATABASE is supported yet')
        } else {
            throw new Error('Invalid data_Store');
        }
    } catch (err) {
        res.send({
            status: false,
            message: err.message,
            data: err
        })
    }
    
}

exports.updateContact = async (req, res, next) => {
    try {
        if(req.body.data_store == 'CRM') {
            const payload = req.body;
            const contact_id = payload.contact_id;
            delete payload.contact_id;
            delete payload.data_store;
            const updated_contact = await fs_service.updateContact(contact_id, payload);
            res.send({
                status: true,
                message: 'Success',
                data: updated_contact.data
            })
        } else if(req.body?.data_store === 'DATABASE') {
            throw new Error('DATABASE is supported yet')
        } else {
            throw new Error('Invalid data_Store');
        }
    } catch (err) {
        res.send({
            status: false,
            message: err.message,
            data: err
        })
    }
    
}

exports.deleteContact = async (req, res, next) => {
    try {
        if(req.body.data_store == 'CRM') {
            const deleted_contact = await fs_service.deleteContact(req.body.contact_id)
            res.send({
                status: true,
                message: 'Success',
                data: deleted_contact.data
            })
        } else if(req.body?.data_store === 'DATABASE') {
            throw new Error('DATABASE is supported yet')
        } else {
            throw new Error('Invalid data_Store');
        }
    } catch (err) {
        res.send({
            status: false,
            message: err.message,
            data: err
        })
    }
    
}