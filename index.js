try {
	console.log(`environnement: ${process.env.CUSTOM}`);
} catch (error) {
	console.log("error acessing env var")
}
