import moment from 'moment';

export const validateEmail = (email: string) => {
  const regExp =
    /^([\w-+']+(?:\.[\w-+']+)*)@[a-z]{1,12}\.([a-z]{2,6}(?:\.[a-z]{2,3})?)$/;

  return regExp.test(email);
};

export const getDateOrTime = (time: number) => {
  const now = moment().startOf('day');
  const target = moment(time).startOf('day');

  return moment(time).format(now.diff(target, 'day') > 0 ? 'MM/DD' : 'HH:mm');
};
