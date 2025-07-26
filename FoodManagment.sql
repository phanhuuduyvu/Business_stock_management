create database FoodCo_Managment;

use FoodCo_Managment;

create table roles (
	RoleID INT PRIMARY KEY auto_increment,
	RoleName varchar (100) NOT NULL,
    Task varchar (100) NOT NULL
);

create table user(
	UserID INT PRIMARY KEY auto_increment,
	Username varchar (100) NOT NULL,
    Phonenumber varchar (10) NOT NULL,
    Email varchar (100) NOT NULL,
    Password varchar (20) NOT NULL,
    Birthdate Date,
    RoleID INT,
    FOREIGN KEY (RoleID) REFERENCES roles(RoleID)
);

create table RawMaterials(
	MaterialID INT PRIMARY KEY auto_increment,
    MaterialName varchar (100) NOT NULL,
    MaterialQuantity INT default 0,
    Lowstock INT,
    Unit varchar (10) NOT NULL,
    TimeUpdate TIMESTAMP default current_timestamp on update current_timestamp
);

create table Transaction(
	TransactionType ENUM('Import','Export') NOT NULL,
	TimeUpdate TIMESTAMP default current_timestamp on update current_timestamp,
    TransactionID INT PRIMARY KEY auto_increment,
    BeforeChange DECIMAL(10,2),
    AfterChange DECIMAL (10,2),
    ChangeBy int,
    FOREIGN KEY (ChangeBy) REFERENCES user(UserID),
    ItemID INT Not null,
    ItemCategory ENUM('RawMaterials','FinishedGoods')
);

create table FinishedGoods(
	GoodsID INT PRIMARY KEY auto_increment,
    FinishedGoodsName varchar (100) NOT NULL,
	FinishedGoodsQuantity INT default 0,
    Lowstock INT,
    TimeUpdate TIMESTAMP default current_timestamp on update current_timestamp
);