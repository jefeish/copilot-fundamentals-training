CREATE TABLE Profile (
    profile_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    address VARCHAR(255),
    phone_number VARCHAR(20)
);

CREATE TABLE User (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    profile_id INT,
    FOREIGN KEY (profile_id) REFERENCES Profile(profile_id)
);
