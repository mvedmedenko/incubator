function validateHello(greetings) {
    const langues = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"]
    return langues.map((i) => i === greetings ? true : false)
  }

  validateHello('ahoj');