export const validateLoginForm = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const errors = {};
  if (!emailRegex.test(email)) {
    errors.email = "Enter a valid email";
  }
  if (password.length < 6) {
    errors.password = "Enter a valid password";
  }
  return errors;
};

export const validateRegisterForm = (name, email, password) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const errors = {};
  if (!emailRegex.test(email)) {
    errors.email = "Enter a valid email";
  }
  if (password.length < 6) {
    errors.password = "Enter a valid password";
  }
  if (name.length < 5) {
    errors.name = "Name should be minimum 5 characters";
  }
  return errors;
};
