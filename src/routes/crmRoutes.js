import { addnewContact,
        getContacts,
        getContactWithID,
        updateContact,
        deleteContact
        }
    from '../controllers/crmControllers';
const routes = (app) => {
    app.route('/contact')
        .get((req, res, next)=> {
            //middleware
            console.log('Request from: ${req.originalUrl}')
            console.log('Request type: ${req.method}')
            next();
        }, getContacts)
// POST endpoint
        .post(addnewContact);

    app.route('/contact/:contactID')
        //get a specific endpoint
        .get(getContactWithID)
        //update a contact
        .put(updateContact)
        //deleting a specific contact
        .delete(deleteContact)
}
export  default routes;