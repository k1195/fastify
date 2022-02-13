import { addCustomer, getAllCustomer } from "../controller/customerController";

const routes = [{
        method: 'GET',
        url: '/customer/get',
        handler: getAllCustomer
    },

    {
        method: 'POST',
        url: '/customer/add',
        handler: addCustomer
    }
]

export default routes