CREATE TABLE `userType` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `flagActive` boolean,
  `createdAt` timestamp DEFAULT (current_timestamp()),
  `updatedAt` timestamp DEFAULT (current_timestamp())
);

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `userTypeId` int,
  `birthDate` date,
  `gender` varchar(50),
  `addressId` int,
  `phone` varchar(15),
  `phoneEmergency` varchar(15),
  `cpf` varchar(14),
  `rg` varchar(12),
  `nameMother` varchar(255),
  `email` varchar(255),
  `crm` varchar(9),
  `coren` varchar(15),
  `flagActive` boolean,
  `createdAt` timestamp DEFAULT (current_timestamp()),
  `updatedAt` timestamp DEFAULT (current_timestamp())
);

CREATE TABLE `address` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `street` varchar(255),
  `number` varchar(20),
  `city` varchar(100),
  `state` varchar(50),
  `cep` varchar(10),
  `complement` varchar(255),
  `neighborhood` varchar(255),
  `flagActive` boolean,
  `createdAt` timestamp DEFAULT (current_timestamp()),
  `updatedAt` timestamp DEFAULT (current_timestamp())
);

CREATE TABLE `medicalProcedure` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `procedureDate` datetime,
  `checkin` boolean DEFAULT (false),
  `checkinTime` datetime,
  `medicalProcedureTypeId` int,
  `patientId` int,
  `doctorId` int,
  `nurseId` int,
  `folder` varchar(255),
  `flagActive` boolean,
  `createdAt` timestamp DEFAULT (current_timestamp()),
  `updatedAt` timestamp DEFAULT (current_timestamp())
);

CREATE TABLE `medicalProcedureType` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `medicalProcedureSectionId` int,
  `name` varchar(255),
  `description` varchar(255),
  `flagActive` boolean,
  `createdAt` timestamp DEFAULT (current_timestamp()),
  `updatedAt` timestamp DEFAULT (current_timestamp())
);

CREATE TABLE `medicalProcedureSection` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `color` varchar(7),
  `description` varchar(255),
  `flagActive` boolean,
  `createdAt` timestamp DEFAULT (current_timestamp()),
  `updatedAt` timestamp DEFAULT (current_timestamp())
);

CREATE TABLE `medicalHistory` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `patientId` int,
  `diseaseHistory` text,
  `previousSurgeries` text,
  `allergies` text,
  `flagActive` boolean,
  `createdAt` timestamp DEFAULT (current_timestamp()),
  `updatedAt` timestamp DEFAULT (current_timestamp())
);

CREATE TABLE `appointments` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `medicalProcedureId` int,
  `appointmentDate` datetime,
  `reason` text,
  `observations` text,
  `flagActive` boolean,
  `createdAt` timestamp DEFAULT (current_timestamp()),
  `updatedAt` timestamp DEFAULT (current_timestamp())
);

CREATE TABLE `prescriptions` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `medicalProcedureId` int,
  `medicament` varchar(100),
  `dosage` varchar(50),
  `instructions` text,
  `flagActive` boolean,
  `createdAt` timestamp DEFAULT (current_timestamp()),
  `updatedAt` timestamp DEFAULT (current_timestamp())
);

CREATE TABLE `medicalRecord` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `medicalProcedureId` int,
  `doctorRecord` text,
  `nurseRecord` text,
  `flagActive` boolean,
  `createdAt` timestamp DEFAULT (current_timestamp()),
  `updatedAt` timestamp DEFAULT (current_timestamp())
);

ALTER TABLE `users` ADD FOREIGN KEY (`userTypeId`) REFERENCES `userType` (`id`);

ALTER TABLE `users` ADD FOREIGN KEY (`addressId`) REFERENCES `address` (`id`);

ALTER TABLE `medicalProcedure` ADD FOREIGN KEY (`medicalProcedureTypeId`) REFERENCES `medicalProcedureType` (`id`);

ALTER TABLE `medicalProcedure` ADD FOREIGN KEY (`patientId`) REFERENCES `users` (`id`);

ALTER TABLE `medicalProcedure` ADD FOREIGN KEY (`doctorId`) REFERENCES `users` (`id`);

ALTER TABLE `medicalProcedure` ADD FOREIGN KEY (`nurseId`) REFERENCES `users` (`id`);

ALTER TABLE `medicalProcedureType` ADD FOREIGN KEY (`medicalProcedureSectionId`) REFERENCES `medicalProcedureSection` (`id`);

ALTER TABLE `medicalHistory` ADD FOREIGN KEY (`patientId`) REFERENCES `users` (`id`);

ALTER TABLE `appointments` ADD FOREIGN KEY (`medicalProcedureId`) REFERENCES `medicalProcedure` (`id`);

ALTER TABLE `prescriptions` ADD FOREIGN KEY (`medicalProcedureId`) REFERENCES `medicalProcedure` (`id`);

ALTER TABLE `medicalRecord` ADD FOREIGN KEY (`medicalProcedureId`) REFERENCES `medicalProcedure` (`id`);
