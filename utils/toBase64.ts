const toBase64 = (file: File) => {
  const base64 = new Buffer(file.data).toString('base64');

  return base64;
}

export default toBase64;
