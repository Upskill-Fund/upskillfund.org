const API = 'http://localhost:8080';

export const EmailValidation = (value) => {
  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(value)) {
    return true;
  } else {
    return false;
  }
};

export const PhoneNumberValidation = (value) => {
  let re = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  if (re.test(value)) {
    return true;
  } else {
    return false;
  }
};

export async function fetchFromAPI(endpoint, opts) {
  const { method, body } = { method: 'POST', body: null, ...opts };

  const res = await fetch(`${API}/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}
