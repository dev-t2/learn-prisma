export const validateEmail = (email: string) => {
  const regExp =
    /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[A-z]+\.[A-z]{2}.?[A-z]{0,3}$/;

  return regExp.test(email);
};

export const deleteWhitespace = (text: string) => {
  const regExp = /\s/g;

  return text.replace(regExp, '');
};
