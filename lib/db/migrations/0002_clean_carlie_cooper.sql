CREATE TABLE IF NOT EXISTS "biodata_details" (
	"id" serial PRIMARY KEY NOT NULL,
	"biodata_id" integer NOT NULL,
	"primary_information" json NOT NULL,
	"general_information" json NOT NULL,
	"personal_information" json NOT NULL,
	"address" json NOT NULL,
	"education" json NOT NULL,
	"family" json NOT NULL,
	"religion" json NOT NULL,
	"marital_information" json NOT NULL,
	"partner_information" json NOT NULL,
	"management_query" json NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "biodatas" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100),
	"full_name" varchar(100),
	"email" varchar(100),
	"mobile" varchar(100),
	"birth" date,
	"married_status" varchar(50),
	"height" varchar(20),
	"present_district" varchar(100),
	"permanent_district" varchar(100),
	"age" varchar(20),
	"skin_color" varchar(50),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "biodata_details" ADD CONSTRAINT "biodata_details_biodata_id_biodatas_id_fk" FOREIGN KEY ("biodata_id") REFERENCES "public"."biodatas"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
