import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const clientsData = [
  {
    "_id": 555555,
    "docType": "nif",
    "docNum": "11223344E",
    "email": "it@hablamos.com",
    "customerId": "11111",
    "givenName": "Enriqueta",
    "familyName1": "Hablamos",
    "phone": "668668668",
  },
  {
    "_id": 555556,
    "docType": "nif",
    "docNum": "22334455F",
    "email": "contact@hablamos.com",
    "customerId": "22222",
    "givenName": "Juan",
    "familyName1": "Perez",
    "phone": "669669669",
  }
];

const productsData = [
  {
    "_id": 1111111,
    "productName": "FIBRA 1000MB",
    "mbSpeed": 1000,
    "gbData": null,
    "productTypeName": "ftth",
    "numeración Terminal": 933933933,
    "soldAt": "2019-01-09 14:26:17",
    "customerId": "11111",
  },
  {
    "_id": 1111112,
    "productName": "MOVIL 500GB",
    "mbSpeed": null,
    "gbData": 500,
    "productTypeName": "4G",
    "numeración Terminal": 696696969,
    "soldAt": "2020-08-01 18:30:27",
    "customerId": "11111",
  },
  {
    "_id": 1111113,
    "productName": "FIBRA 500MB",
    "mbSpeed": 500,
    "gbData": null,
    "productTypeName": "ftth",
    "numeración Terminal": 944944944,
    "soldAt": "2021-05-15 10:20:30",
    "customerId": "22222",
  }
];

app.get('/customers', (_, res) => {
  res.json(clientsData);
});

app.get('/customer/:id', (req, res) => {
  const customerId = req.params.id;
  const client = clientsData.find(client => client.customerId === customerId);

  if (client) {
    const response = {
      customer: client,
      products: productsData.filter(product => product.customerId === customerId)
    };
    res.json(response);
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
