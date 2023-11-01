const objectToQueryString = (obj: Record<string, any>) => {
  const keyValuePairs = [];

  for (const key in obj) {
    keyValuePairs.push(
      `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`,
    );
  }
  return keyValuePairs.join('&');
};

export default objectToQueryString;
