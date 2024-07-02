const toBase64 = (file: File | null) => {
	return new Promise((resolve, reject) => {
		if (!file) {
			return ''
		}
		const fileReader = new FileReader();

		fileReader.readAsDataURL(file);

		fileReader.onload = () => {
			resolve(fileReader.result);
		};

		fileReader.onerror = (error) => {
			reject(error);
		};
	});
};

export default toBase64
