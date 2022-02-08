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

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });

// const id = "110";
// invokeAction({ action: "get", id });

const name = "Sara Smit";
const email = "sara@utquamvel.net";
const phone = "(682) 822-2959";

invokeAction({ action: "add", name, email, phone });

// invokeAction(argv);
