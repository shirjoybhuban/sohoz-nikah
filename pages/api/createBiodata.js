// pages/api/createBiodata.js
import { db } from 'lib/db';
import { biodataDetails, biodatas, users } from 'lib/db/schema';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body; // Get data from the request body
      await createBiodataWithDetails(data); // Call your function
      res
        .status(200)
        .json({ success: true, message: 'Biodata created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Failed to create biodata',
        error: error.message,
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function createBiodataWithDetails(data) {
  const biodataNo = generateBiodataNo();

  // const biodataData = {
  //   gender: data.primaryInformation.gender,
  //   full_name: data.primaryInformation.fullName,
  //   email: data.primaryInformation.contactEmail,
  //   mobile: data.primaryInformation.contactPhone,
  //   birth: data.generalInformation.birthDate,
  //   married_status: data.generalInformation.marriageType,
  //   height: data.generalInformation.hight,
  //   present_district: data.address.presentZila,
  //   permanent_district: data.address.permanentZila,
  //   age: data.bridalInformation.hight,
  //   skin_color: data.generalInformation.skinTone,
  // };

  const biodataData = {
    biodataNo: biodataNo,
    gender: 'Male',
    fullName: 'ren Doe',
    email: 'fin.doe@example.com',
    mobile: '1234567890',
    birth: new Date('1990-01-01'),
    marriedStatus: 'Single',
    height: '5.9',
    presentDistrict: 'Dhaka',
    permanentDistrict: 'Chittagong',
    age: '33',
    skinColor: 'Fair',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  //   const biodataDetailsData = { ...data };
  //   delete biodataDetailsData.primaryInformation;

  try {
    // Start the transaction
    await db.transaction(async (trx) => {
      // Insert into the Biodata table
      const insertedBiodata = await trx
        .insert(biodatas)
        .values(biodataData)
        .returning();
      const biodataId = insertedBiodata[0].id;
      console.log('biodataId', biodataId);

      const bd = {
        // Ensure this ID exists in the biodatas table
        primaryInformation: {
          name: 'John Doe',
          age: 33,
          gender: 'Male',
        },
        generalInformation: {
          hobbies: ['Reading', 'Traveling'],
          languages: ['English', 'Spanish'],
        },
        personalInformation: {
          personalityTraits: ['Friendly', 'Hardworking'],
        },
        address: {
          present: 'Dhaka, Bangladesh',
          permanent: 'Chittagong, Bangladesh',
        },
        education: {
          degree: 'Bachelor of Science',
          institution: 'University of Dhaka',
          year: 2015,
        },
        family: {
          father: 'Mr. Doe',
          mother: 'Mrs. Doe',
          siblings: 2,
        },
        religion: {
          faith: 'Islam',
          practices: ['Prayers', 'Fasting'],
        },
        maritalInformation: {
          status: 'Single',
          previousMarriage: false,
        },
        partnerInformation: {
          preferences: {
            ageRange: '25-30',
            height: '5.5-5.8',
            education: 'Bachelor or above',
          },
        },
        managementQuery: {
          questions: ['How soon can I get a biodata?'],
          responses: ['Typically within 3-5 days.'],
        },
      };
      await trx.insert(biodataDetails).values({
        biodataId,
        ...bd,
      });
    });

    console.log('Transaction successful: All data inserted');
  } catch (error) {
    console.error('Transaction failed:', error);
    throw new Error('Failed to insert biodata and details');
  }
}

export function generateBiodataNo() {
  const prefix = 'SN'; // Prefix for "Sohoz Nikah" (2 characters)
  const timestamp = Date.now().toString().slice(-6); // Last 6 digits of the timestamp
  const random = Math.floor(Math.random() * 100)
    .toString()
    .padStart(2, '0'); // 2-digit random number
  return `${prefix}${timestamp}${random}`; // Total: 10 characters
}
