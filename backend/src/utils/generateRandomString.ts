const generateRandomString = (length: number) => {
  const option =
    "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
  let result = "";

  for (let i = 0; i < option.length; i++) {
    result += option[Math.floor(Math.random() * option.length)];
  }
  return result;
};

export default generateRandomString;