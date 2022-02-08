// const argv = require("yargs").argv;

const contactsList = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsList.listContacts();
      console.log(contacts);
      break;

    case "get":
      const contact = await contactsList.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(contact);
      break;

    case "add":
      const creatContact = await contactsList.addContact(name, email, phone);
      console.log(creatContact);
      break;

    case "update":
      const updateContact = await contactsList.updateContactById(
        id,
        name,
        email,
        phone
      );
      if (!updateContact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(updateContact);
      // ... id
      break;

    case "remove":
      const removeContact = await contactsList.removeContact(id);
      console.log(removeContact);
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });

// const id = "110";
// invokeAction({ action: "get", id });

// const name = "Sara Smit";
// const email = "sara@utquamvel.net";
// const phone = "(682) 822-2959";

// invokeAction({ action: "add", name, email, phone });

// invokeAction(argv);

// const name = "Maria Smit";
// const email = "Sara@utquamvel.net";
// const phone = "(682) 822-2959";

const updateId = "1d89c915-94b7-49bb-a0fc-223b98302374";

// invokeAction({ action: "update", id: updateId, name, email, phone });

invokeAction({ action: "remove", id: updateId });
