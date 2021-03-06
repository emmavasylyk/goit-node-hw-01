const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const contactsList = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsList.listContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = await contactsList.getContactById(id);
      if (!contact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.table(contact);
      break;

    case "add":
      const creatContact = await contactsList.addContact(name, email, phone);
      console.table(creatContact);
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
      console.table(updateContact);
      break;

    case "remove":
      const removeContact = await contactsList.removeContact(id);
      console.table(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
