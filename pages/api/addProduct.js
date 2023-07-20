import apiHandler from '../../lib/api-handler';
import clientPromise from '../../lib/mongodb';
apiHandler.post(async (req, res) => {
	const { Nom, Description, Prix, QuantitéEnStock, CatégorieID, MarqueID, URLImage, Évaluation } = req.body;
	const client = await clientPromise;
	const db = client.db();
	const newProduct = { Nom, Description, Prix, QuantitéEnStock, CatégorieID, MarqueID, URLImage, Évaluation };
	const result = await db.collection('Produits').insertOne(newProduct);
	res.json({ success: true, data: newProduct });
});
export default apiHandler;
