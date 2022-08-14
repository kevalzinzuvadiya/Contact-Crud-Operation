const axios = require('axios').default;
const api =  process.env.fresh_sales_api;
const fs_base_url = process.env.fresh_sales_bundle_alias +'/api/contacts';

exports.createContact = (data) => {
    return axios.post(fs_base_url, {
        "contact": data
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token token=${api}`
          }
    })
}

exports.getContact = (contact_id) => {
    return axios.get(fs_base_url + `/${contact_id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token token=${api}`
          }
    })
}

exports.updateContact = (contact_id, payload) => {
    return axios.put(fs_base_url + `/${contact_id}`, {
        "contact": payload
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token token=${api}`
          }
    })
}

exports.deleteContact = (contact_id) => {
    return axios.delete(fs_base_url + `/${contact_id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token token=${api}`
          }
    })
}