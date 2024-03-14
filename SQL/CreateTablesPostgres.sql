CREATE TABLE "userType" (
  "id" serial PRIMARY KEY,
  "name" varchar(255),
  "flagActive" boolean,
  "createdAt" timestamp DEFAULT current_timestamp,
  "updatedAt" timestamp DEFAULT current_timestamp
);

CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "name" varchar(255),
  "userTypeId" int,
  "birthDate" date,
  "gender" varchar(50),
  "addressId" int,
  "phone" varchar(15),
  "phoneEmergency" varchar(15),
  "cpf" varchar(14),
  "rg" varchar(12),
  "nameMother" varchar(255),
  "email" varchar(255),
  "crm" varchar(9),
  "coren" varchar(15),
  "flagActive" boolean,
  "createdAt" timestamp DEFAULT current_timestamp,
  "updatedAt" timestamp DEFAULT current_timestamp
);

CREATE TABLE "address" (
  "id" serial PRIMARY KEY,
  "street" varchar(255),
  "number" varchar(20),
  "city" varchar(100),
  "state" varchar(50),
  "cep" varchar(10),
  "complement" varchar(255),
  "neighborhood" varchar(255),
  "flagActive" boolean,
  "createdAt" timestamp DEFAULT current_timestamp,
  "updatedAt" timestamp DEFAULT current_timestamp
);

CREATE TABLE "medicalProcedure" (
  "id" serial PRIMARY KEY,
  "procedureDate" timestamp,
  "checkin" boolean DEFAULT false,
  "checkinTime" timestamp,
  "medicalProcedureTypeId" int,
  "patientId" int,
  "doctorId" int,
  "nurseId" int,
  "folder" varchar(255),
  "flagActive" boolean,
  "createdAt" timestamp DEFAULT current_timestamp,
  "updatedAt" timestamp DEFAULT current_timestamp
);

CREATE TABLE "medicalProcedureType" (
  "id" serial PRIMARY KEY,
  "medicalProcedureSectionId" int,
  "name" varchar(255),
  "description" varchar(255),
  "flagActive" boolean,
  "createdAt" timestamp DEFAULT current_timestamp,
  "updatedAt" timestamp DEFAULT current_timestamp
);

CREATE TABLE "medicalProcedureSection" (
  "id" serial PRIMARY KEY,
  "color" varchar(7),
  "description" varchar(255),
  "flagActive" boolean,
  "createdAt" timestamp DEFAULT current_timestamp,
  "updatedAt" timestamp DEFAULT current_timestamp
);

CREATE TABLE "medicalHistory" (
  "id" serial PRIMARY KEY,
  "patientId" int,
  "diseaseHistory" text,
  "previousSurgeries" text,
  "allergies" text,
  "flagActive" boolean,
  "createdAt" timestamp DEFAULT current_timestamp,
  "updatedAt" timestamp DEFAULT current_timestamp
);

CREATE TABLE "appointments" (
  "id" serial PRIMARY KEY,
  "medicalProcedureId" int,
  "appointmentDate" timestamp,
  "reason" text,
  "observations" text,
  "flagActive" boolean,
  "createdAt" timestamp DEFAULT current_timestamp,
  "updatedAt" timestamp DEFAULT current_timestamp
);

CREATE TABLE "prescriptions" (
  "id" serial PRIMARY KEY,
  "medicalProcedureId" int,
  "medicament" varchar(100),
  "dosage" varchar(50),
  "instructions" text,
  "flagActive" boolean,
  "createdAt" timestamp DEFAULT current_timestamp,
  "updatedAt" timestamp DEFAULT current_timestamp
);

CREATE TABLE "medicalRecord" (
  "id" serial PRIMARY KEY,
  "medicalProcedureId" int,
  "doctorRecord" text,
  "nurseRecord" text,
  "flagActive" boolean,
  "createdAt" timestamp DEFAULT current_timestamp,
  "updatedAt" timestamp DEFAULT current_timestamp
);

ALTER TABLE "users" ADD CONSTRAINT "userType_fk" FOREIGN KEY ("userTypeId") REFERENCES "userType" ("id");

ALTER TABLE "users" ADD CONSTRAINT "address_fk" FOREIGN KEY ("addressId") REFERENCES "address" ("id");

ALTER TABLE "medicalProcedure" ADD CONSTRAINT "medicalProcedureType_fk" FOREIGN KEY ("medicalProcedureTypeId") REFERENCES "medicalProcedureType" ("id");

ALTER TABLE "medicalProcedure" ADD CONSTRAINT "patient_fk" FOREIGN KEY ("patientId") REFERENCES "users" ("id");

ALTER TABLE "medicalProcedure" ADD CONSTRAINT "doctor_fk" FOREIGN KEY ("doctorId") REFERENCES "users" ("id");

ALTER TABLE "medicalProcedure" ADD CONSTRAINT "nurse_fk" FOREIGN KEY ("nurseId") REFERENCES "users" ("id");

ALTER TABLE "medicalProcedureType" ADD CONSTRAINT "medicalProcedureSection_fk" FOREIGN KEY ("medicalProcedureSectionId") REFERENCES "medicalProcedureSection" ("id");

ALTER TABLE "medicalHistory" ADD CONSTRAINT "patient_fk" FOREIGN KEY ("patientId") REFERENCES "users" ("id");

ALTER TABLE "appointments" ADD CONSTRAINT "medicalProcedure_fk" FOREIGN KEY ("medicalProcedureId") REFERENCES "medicalProcedure" ("id");

ALTER TABLE "prescriptions" ADD CONSTRAINT "medicalProcedure_fk" FOREIGN KEY ("medicalProcedureId") REFERENCES "medicalProcedure" ("id");

ALTER TABLE "medicalRecord" ADD CONSTRAINT "medicalProcedure_fk" FOREIGN KEY ("medicalProcedureId") REFERENCES "medicalProcedure" ("id");

