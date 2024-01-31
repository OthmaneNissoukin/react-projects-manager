function idGenerator(preffix = "ID", length = 4) {
  if (length < 4) throw new Error("ID length must be equal or greater than 4");
  const lng = 10 ** length - 1;
  return `${String(preffix).toUpperCase()}-${String(parseInt(Math.random() * lng)).padStart(length, "0")}`;
}

export { idGenerator };
