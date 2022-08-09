const getFromLocalStorage = (key: string) => {
  const rawDatum = localStorage.getItem(key);
  if (rawDatum) {
    return JSON.parse(rawDatum);
  }
  return null;
};

export default getFromLocalStorage;
