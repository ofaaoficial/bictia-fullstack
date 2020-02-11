ALTER TABLE users DROP FOREIGN KEY fk_role_id;
ALTER TABLE users DROP FOREIGN KEY fk_branch_office_id;
ALTER TABLE sales DROP FOREIGN KEY fk_buyer_id;
ALTER TABLE sales DROP FOREIGN KEY fk_product_id;
ALTER TABLE sales DROP FOREIGN KEY fk_seller_id;

DROP TABLE IF EXISTS `branch_offices`, `products`, `roles`, `sales`, `users`;

CREATE TABLE roles (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    UNIQUE (name)
);

CREATE TABLE
    branch_offices (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(30) NOT NULL,
        address VARCHAR(30) NOT NULL
);

CREATE TABLE
    users (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(20) NOT NULL,
        last_name VARCHAR(20) NOT NULL,
        document VARCHAR(20) NOT NULL,
        role_id INTEGER NOT NULL DEFAULT 3,
        branch_office_id INTEGER NOT NULL,
        UNIQUE (document),
        CONSTRAINT fk_role_id FOREIGN KEY (role_id) REFERENCES roles(id),
        CONSTRAINT fk_branch_office_id FOREIGN KEY (branch_office_id) REFERENCES branch_offices(id)
);

CREATE TABLE
    products (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(30) NOT NULL,
        price FLOAT(10, 2) NOT NULL,
        stock SMALLINT NOT NULL,
        UNIQUE (name)
);

CREATE TABLE
    sales (
        id INTEGER PRIMARY KEY  AUTO_INCREMENT,
        date DATETIME NOT NULL,
        product_id INTEGER NOT NULL,
        buyer_id INTEGER NOT NULL,
        seller_id INTEGER NOT NULL,
        CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES products(id),
        CONSTRAINT fk_seller_id FOREIGN KEY (seller_id) REFERENCES users(id),
        CONSTRAINT fk_buyer_id FOREIGN KEY (buyer_id) REFERENCES users(id)
);

INSERT INTO roles (name)
    VALUES
       ('Administrador'),
       ('Vendedor'),
       ('Cliente');

INSERT INTO branch_offices (name, address)
    VALUES
           ('Bogotá', 'Dirección 1'),
           ('Medellin', 'Dirección 2'),
           ('Caldas', 'Dirección 3'),
           ('Guaviare', 'Dirección 4');

INSERT INTO users (name, last_name, document, role_id, branch_office_id)
    VALUES
           ('Oscar', 'Amado', '1022445546', 1, 1),
           ('Cristian', 'Rodriguez', '14235235', 2, 1),
           ('Santiago', 'Hernando', '14425235', 3, 1),
           ('Daniela', 'Amarillo', '14325235', 3, 1);

INSERT INTO products (name, price, stock)
    VALUES
            ('Yogurt de fresa', '20000', 100),
           ('Yogurt de mango', '22000', 150),
           ('Yogurt de coco', '19000', 50);

INSERT INTO sales (date, product_id, buyer_id, seller_id)
    VALUES
        ('2020-02-11 22:30:00', 1, 3, 2),
        ('2020-03-11 10:30:00', 1, 4, 2),
        ('2020-12-25 05:30:00', 1, 4, 2);


# Usuarios del sistema con su rol y sucursal.
SELECT u.id,
       u.name,
       u.last_name,
       u.document,
       r.name AS rol_name,
       b.name AS branch_office_name
FROM users u
    INNER JOIN roles r ON u.role_id = r.id
    INNER JOIN branch_offices b ON u.branch_office_id = b.id;

# Productos del sistema.
SELECT * FROM products;

# Total productos vendido segun un rango de fechas.
SELECT s.date,
       p.name AS product_name,
       ub.name AS buyer,
       us.name AS selleyer
FROM sales s
    INNER JOIN products p ON s.product_id = p.id
    INNER JOIN users ub ON s.buyer_id = ub.id
    INNER JOIN users us ON s.seller_id = us.id
WHERE s.date BETWEEN '2020-02-11' AND '2020-03-25';

# Lista de usuarios con la sucursal en la que han comprado
SELECT s.date,
       ub.document,
       p.name AS product_name,
       ub.name AS buyer,
       bo.name AS branch_office_name
FROM sales s
    INNER JOIN products p ON s.product_id = p.id
    INNER JOIN users ub ON s.buyer_id = ub.id
    INNER JOIN users us ON s.seller_id = us.id
    INNER JOIN branch_offices bo ON ub.branch_office_id = bo.id;
