const Product = require('./model/product')

class FakeDB {
  constructor() {
    this.products = [
      {
        coverImage: './assets/img/original.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'Sample Text1',
        heading2: 'Sample Text2',
        heading3: 'Sample Text3',
        headingText1: 'Sample Text Sample Text Sample Text Sample Text ',
        headingText2: 'Sample Text Sample Text Sample Text Sample Text ',
        headingText3: 'Sample Text Sample Text Sample Text Sample Text ',
      },
      {
        coverImage: './assets/img/original.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'Sample Text1',
        heading2: 'Sample Text2',
        heading3: 'Sample Text3',
        headingText1: 'Sample Text Sample Text Sample Text Sample Text ',
        headingText2: 'Sample Text Sample Text Sample Text Sample Text ',
        headingText3: 'Sample Text Sample Text Sample Text Sample Text ',
      },
      {
        coverImage: './assets/img/original.jpg',
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading1: 'Sample Text1',
        heading2: 'Sample Text2',
        heading3: 'Sample Text3',
        headingText1: 'Sample Text Sample Text Sample Text Sample Text ',
        headingText2: 'Sample Text Sample Text Sample Text Sample Text ',
        headingText3: 'Sample Text Sample Text Sample Text Sample Text ',
      },
      {
        coverImage: './assets/img/original.jpg',
        name: 'Phone Special',
        price: 999,
        description: 'Lost Technologies...',
        heading1: 'Sample Text1',
        heading2: 'Sample Text2',
        heading3: 'Sample Text3',
        headingText1: 'Sample Text Sample Text Sample Text Sample Text ',
        headingText2: 'Sample Text Sample Text Sample Text Sample Text ',
        headingText3: 'Sample Text Sample Text Sample Text Sample Text ',
      }
    ]
  }
  async initDb() {
    await this.cleanDb();
    this.pushProductsToDb()
  }

  async cleanDb() {
    await Product.deleteMany({})
  }

  pushProductsToDb() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      })
  }

  seeDb() {
    this.pushProductsToDb()
  }
}

module.exports = FakeDB