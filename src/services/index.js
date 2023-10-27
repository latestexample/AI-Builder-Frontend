export const getService = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return token;
  } else {
    return null;
  }
};
