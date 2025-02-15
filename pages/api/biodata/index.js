import { db } from 'lib/db'; // Database instance
import { eq, and, between } from 'drizzle-orm';
import { biodatas } from 'lib/db/schema';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { gender, permanentDistrict, marriedStatus, minAge, maxAge, biodataNo } =
        req.query;
      console.log('gender', typeof gender)
      // Build dynamic filter conditions
      const filters = [];
      if (gender) filters.push(eq(biodatas.gender, gender));
      if (biodataNo) filters.push(eq(biodatas.biodataNo, biodataNo));
      // if (permanentDistrict)
      //   filters.push(eq('permanent_district', permanentDistrict));
      // if (marriedStatus) filters.push(eq('married_status', marriedStatus));
      // if (minAge && maxAge) filters.push(between('age', minAge, maxAge));

      const whereCondition = filters.length > 0 ? and(...filters) : undefined;
      //console.log('whereCondition', whereCondition);
      const selectedValue = {
        id: biodatas.id,
        biodataNo: biodatas.biodataNo,
        gender: biodatas.gender,
        birth: biodatas.birth,
        age: biodatas.age,
        height: biodatas.height,
        marriedStatus: biodatas.marriedStatus,
        permanentDistrict: biodatas.permanentDistrict,
      };

      // Query the database with filters
      const bios = await db
        .select(selectedValue)
        .from(biodatas)
        .where(whereCondition); // Apply the filter condition

      res.status(200).json({ success: true, data: bios });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
