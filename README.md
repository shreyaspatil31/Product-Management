# Product Management

This is a **Product Management System** built using **Spring Boot**, **Hibernate**, **REST API**, **MySQL**, and **HTML & CSS** for the front-end. The application allows users to manage product information including CRUD operations (Create, Read, Update, Delete) with modern front-end design.

## Features

- **Create, Read, Update, and Delete (CRUD)** operations for products.
- **Product Details** include name, category, description, price, quantity, and status (active/inactive).
- User-friendly front-end with **HTML** and **Bootstrap** for styling.
- Modern UI with form validation and dynamic product listing.
- Backend validation using **DTO** with `@Valid` annotations for ensuring data integrity.
- RESTful API implementation for easy integration.
- Custom error handling for product operations.

## Technologies Used

- **Backend**: Java, Spring Boot, Hibernate, REST API
- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Database**: MySQL
- **Validation**: Hibernate Validator (Jakarta Bean Validation)
- **Build Tool**: Maven

## Project Structure

```bash
src/
├── main/
│   ├── java/
│   │   └── com/example/ProductManagement/
│   │       ├── config/
│   │       ├── controller/
│   │       ├── dto/
│   │       ├── entities/
│   │       ├── repository/
│   │       └── service/
│   ├── resources/
│   │   ├── application.properties
│   │   ├── static/
│   │   └── templates/
└── test/
```

## API Endpoints

- **GET /api/products** - Retrieve all products
- **GET /api/products/{id}** - Retrieve product by ID
- **POST /api/products** - Create a new product
- **PUT /api/products/{id}** - Update a product by ID
- **DELETE /api/products/{id}** - Delete a product by ID

## Setup Instructions

### Prerequisites

- **Java 17 or later**
- **MySQL Database** setup
- **Maven** installed

### Steps to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ProductManagement.git
   cd ProductManagement
   ```

2. Update `src/main/resources/application.properties` with your MySQL database credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/yourdbname
   spring.datasource.username=yourusername
   spring.datasource.password=yourpassword
   ```

3. Build the project using Maven:
   ```bash
   mvn clean install
   ```

4. Run the application:
   ```bash
   mvn spring-boot:run
   ```

5. Open the browser and navigate to:
   ```
   http://localhost:8080
   ```

## Frontend Usage

The front-end of this application is built using **JSP** and **Bootstrap** for a modern look and feel. The main features include:
- **Product Form**: Allows adding/updating product details.
- **Product List**: Displays all products with edit and delete options.

### Styles

The front-end styles are located in:
```bash
src/main/resources/static/css/styles.css
```
![image](https://github.com/user-attachments/assets/89a59917-3eb4-4598-8b4e-4a3e75cf19e2)


## Contributing

Contributions are welcome! Please create a pull request for any features or bug fixes.

## License

This project is licensed under the MIT License.
```

This README provides all necessary information, including setup instructions, API endpoints, technologies used, and project structure.
