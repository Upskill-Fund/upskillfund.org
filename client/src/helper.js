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

export async function fetchFromUrl(url, opts) {
  const { method, body } = { body: null, ...opts };
  return await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    header: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => error);
}
