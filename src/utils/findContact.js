const findContact = (word, array) => {
  const normalizetext = word.toLowerCase();

  if (array) {
    return array.filter((contact) =>
      contact.senderName.toLowerCase().includes(normalizetext)
    );
  }
};

export default findContact;
