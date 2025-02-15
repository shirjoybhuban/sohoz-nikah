import {
    integer,
    pgTable,
    serial,
    text,
    date,
    timestamp,
    varchar,
    json, primaryKey, foreignKey 
} from "drizzle-orm/pg-core"
  
  export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }),
    email: varchar("email", { length: 255 }).notNull().unique(),
    passwordHash: text("password_hash").notNull(),
    // role: varchar("role", { length: 20 }).notNull().default("member"),
    // roleId: integer("role_id")
    //   .notNull()
    //   .references(() => roles.id),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
    deletedAt: timestamp("deleted_at"),
  })

  export const roles = pgTable("roles", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 100 }),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
    deletedAt: timestamp("deleted_at"),
  })

  export const biodatas = pgTable("biodatas", {
    id: serial("id").primaryKey(),
    biodataNo: varchar("biodata_no", { length: 100 }),
    gender: varchar("gender", { length: 100 }),
    fullName: varchar("full_name", { length: 100 }),
    email: varchar("email", { length: 100 }),
    mobile: varchar("mobile", { length: 100 }),
    birth: date("birth"),
    marriedStatus: varchar("married_status", { length: 50 }),
    height: varchar("height", { length: 20 }),
    presentDistrict: varchar("present_district", { length: 100 }),
    permanentDistrict: varchar("permanent_district", { length: 100 }),
    age: varchar("age", { length: 20 }),
    skinColor: varchar("skin_color", { length: 50 }),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
    deletedAt: timestamp("deleted_at"),
  })

  export const biodataDetails = pgTable("biodata_details", {
    id: serial("id").primaryKey(),
    biodataId: integer("biodata_id")
        .notNull()
        .references(() => biodatas.id, { onDelete: "cascade" }), // Foreign key referencing biodatas
    primaryInformation: json("primary_information").notNull(),
    generalInformation: json("general_information").notNull(),
    personalInformation: json("personal_information").notNull(),
    address: json("address").notNull(),
    education: json("education").notNull(),
    family: json("family").notNull(),
    religion: json("religion").notNull(),
    maritalInformation: json("marital_information").notNull(),
    partnerInformation: json("partner_information").notNull(),
    managementQuery: json("management_query").notNull(),
});