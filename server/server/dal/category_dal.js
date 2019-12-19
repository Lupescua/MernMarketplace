class CategoryDal {
  /* Other option would be to have books as separate schema which would allow for easier querying on single book,
   but on the other hand It would be perfomance draw back querying all books which has certain category,
    this way we can just query single category to get evertything 

  one another option would be to have books here and also separately and when inserting book to save it into two places,
   but that seems to be too much data duplication, although its common in noSQL db's I personally don't like it.   
    */
  constructor(mongoose) {
    this.mongoose = mongoose;
    const categorySchema = new mongoose.Schema({
      categoryName: String,
      books: [
        {
          price: Number,
          title: String,
          author: String,
          sellerName: String,
          sellerEmail: String
        }
      ]
    });
    this.categoryModel = mongoose.model("category", categorySchema);
  }

  async getCategories() {
    try {
      return await this.categoryModel.find({});
    } catch (error) {
      console.error("getCategories:", error.message);
      return {};
    }
  }

  async getCategory(id) {
    try {
      return await this.categoryModel.findById(id);
    } catch (error) {
      console.error("getCategory:", error.message);
      return {};
    }
  }
  async getCategoryByName(catName) {
    try {
      return await this.categoryModel.find({ categoryName: catName });
    } catch (error) {
      console.error("getCategoryByName:", error.message);
      return {};
    }
  }

  // Ensuring category name is unique as we use it in linking inside the router
  async createCategory(newCategory) {
    try {
      let category = new this.categoryModel(newCategory);
      return category.save();
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async deleteCategory(catId) {
    return await this.categoryModel.findByIdAndRemove(catId);
  }

  async createBook(categoryId, book) {
    const category = await this.getCategory(categoryId);
    const newBook = {
      price: book.price,
      title: book.title,
      author: book.author,
      sellerName: book.sellerName,
      sellerEmail: book.sellerEmail
    };
    category.books.push(newBook);
    return category.save();
  }

  async bootstrap(count = 10) {
    let l = (await this.getCategories()).length;
    console.log("Category collection size:", l);

    if (l === 0) {
      let promises = [];

      const categoryNames = [
        "Java",
        "Javascript",
        "Medicine",
        "Sci-fi",
        "Games",
        "Fantasy",
        "Drama",
        "Angular",
        "Something",
        "Crimi"
      ];
      const bookTitles = [
        "eternal heavy",
        "translate salmon",
        "fill race",
        "obligation film",
        " hen bacon",
        " contempt compartment",
        " flavor introduce",
        " tray racism",
        " modest bean",
        "extract waist"
      ];
      const authors = [
        "Jules Verne",
        "J.K Rowling",
        "Some random dude",
        "Bill Gates",
        "Shrek",
        "Marc Zuckerberg",
        "Something whos name doesnt exist",
        "Toril Hygge",
        "Jes jensen",
        "Lars Larsen"
      ];
      const sellerNames = [
        "Luis",
        "Juan alba",
        "Banana banana",
        "Tes Jorgen",
        "Alex Sondeg",
        "Ablah Hablan",
        "Pes Napicu",
        "Mahojakotyc",
        "Phone call",
        "Adam Anol"
      ];
      const sellerEmails = [
        "chance@att.net",
        "howler@yahoo.ca",
        "oster@yahoo.ca",
        "malattia@icloud.com",
        "campware@msn.com",
        "osaru@aol.com",
        "erynf@yahoo.ca",
        "lpalmer@me.com",
        "treeves@live.com",
        "webinc@optonline.net",
        "louise@optonline.net",
        "presoff@mac.com"
      ];
      function randomNumber() {
        return Math.round(Math.random() * (count - 1));
      }
      for (let i = 0; i < count; i++) {
        let randomPrice = Math.round(Math.random() * 100);
        let category = new this.categoryModel({
          categoryName: categoryNames[i],
          books: [
            {
              title: bookTitles[randomNumber()],
              price: randomPrice,
              author: authors[randomNumber()],
              sellerName: sellerNames[randomNumber()],
              sellerEmail: sellerEmails[randomNumber()]
            },
            {
              title: bookTitles[randomNumber()],
              price: randomPrice,
              author: authors[randomNumber()],
              sellerName: sellerNames[randomNumber()],
              sellerEmail: sellerEmails[randomNumber()]
            },
            {
              title: bookTitles[randomNumber()],
              price: randomPrice,
              author: authors[randomNumber()],
              sellerName: sellerNames[randomNumber()],
              sellerEmail: sellerEmails[randomNumber()]
            },
            {
              title: bookTitles[randomNumber()],
              price: randomPrice,
              author: authors[randomNumber()],
              sellerName: sellerNames[randomNumber()],
              sellerEmail: sellerEmails[randomNumber()]
            },
            {
              title: bookTitles[randomNumber()],
              price: randomPrice,
              author: authors[randomNumber()],
              sellerName: sellerNames[randomNumber()],
              sellerEmail: sellerEmails[randomNumber()]
            },
            {
              title: bookTitles[randomNumber()],
              price: randomPrice,
              author: authors[randomNumber()],
              sellerName: sellerNames[randomNumber()],
              sellerEmail: sellerEmails[randomNumber()]
            }
          ]
        });
        promises.push(category.save());
      }

      return Promise.all(promises);
    }
  }
}

module.exports = mongoose => new CategoryDal(mongoose);
