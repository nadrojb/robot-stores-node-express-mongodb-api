## API documentation

### Return all products

* **URL**

  /products

* **Method:**

  `GET`

* **URL Params**

  **Required:**

  There are no required URL params

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br />

  ```json
  {
  "message": "Successfully found products.",
  "data": [
    {
      "_id": "63a06c1f39e63776d2b2809f",
      "title": "It's All 0's and 1's to Me! Apron",
      "price": 24,
      "image": "https://binaryville.com/images/products/fred-0s1s-apron-black.jpg",
      "category": "Aprons",
      "character": "Fred"
    },
    {
      "_id": "63a06c1f39e63776d2b280a0",
      "title": "I Compute, Therefore I Am Apron",
      "price": 24,
      "image": "https://binaryville.com/images/products/dolores-compute-apron-black.jpg",
      "category": "Aprons",
      "character": "Dolores"
    }
  ]
  }
  ```

* **Error Response:**
  
    * **Code:** 500 SERVER ERROR <br />
      **Content:** `{"message": "Unexpected error", "data": []}`

### Return specific product

* **URL**

  /products/{id}

* **Method:**

  `GET`

* **URL Params**

  **Required:**

  There are no required URL params

  **Optional:**

  There are no optional URL params

  **Example:**

  `/products/63a06c1f39e63776d2b280a0`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** <br />

  ```json
  {
  "message": "Successfully found product.",
  "data": 
    {
      "_id": "63a06c1f39e63776d2b2809f",
      "title": "I Compute, Therefore I Am Baseball Hat",
      "price": 29,
      "image": "https://binaryville.com/images/products/dolores-compute-baseballhat-black.jpg",
      "category": "Baseball Hats",
      "character": "Dolores",
      "description": "Cheer the team on in style with our unstructured, low crown, six-panel baseball cap made of 100% organic cotton twill. Featuring our original Binaryville artwork, screen-printed with PVC- and phthalate-free inks. Complete with matching, sewn eyelets, and adjustable fabric closure. ",
      "image2": "https://binaryville.com/images/products/dolores-compute-baseballhat-gray.jpg",
      "image3": "NULL"
    }
  }
  ```

* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
      **Content:** `{"message": "Unknown product ID", "data": []}`

    * **Code:** 500 SERVER ERROR <br />
      **Content:** `{"message": "Unexpected error", "data": []}`

### Return all characters

* **URL**

  /characters

* **Method:**

  `GET`

* **URL Params**

  **Required:**

  There are no required URL params

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />

  ```json
  {
  "message": "Successfully found characters.",
  "data": [
    "Fred","Dolores","Bubbles","Rex"
  ]
  }
  ```

* **Error Response:**

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{"message": "Unexpected error", "data": []}`


### Return all categories

* **URL**

  /categories

* **Method:**

  `GET`

* **URL Params**

  **Required:**

  There are no required URL params

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />

  ```json
  {
  "message": "Successfully found categories.",
  "data": [
    "Aprons","Baseball Hats","Mugs","T-shirts"
  ]
  }
  ```

* **Error Response:**

  * **Code:** 500 SERVER ERROR <br />
    **Content:** `{"message": "Unexpected error", "data": []}`

### Add new product - STRETCH GOAL

* **URL**

  /products

* **Method:**

  `POST`

* **URL Params**

  **Required:**

  There are no required URL params

  **Optional:**

  There are no optional URL params

* **Body Data**

  Must be sent as JSON with the correct headers

  **Required:**

    ```json
    {
      "title": "String",
      "price": Number,
      "image": "URL string",
      "category": "String",
      "character": "String",
      "description": "String"
    }
    ```

  **Optional:**

    ```json
    {
      "image2": "URL string"|null,
      "image3": "URL string"|null
    }
    ```

  **Example:**

  `/products`

* **Success Response:**

    * **Code:** 201 CREATED <br />
      **Content:** <br />

  ```json
  {"message": "Successfully created product."}
  ```

* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
      **Content:** `{"message": "Invalid product data", "data": []}`

    * **Code:** 500 SERVER ERROR <br />
      **Content:** `{"message": "Unexpected error", "data": []}`