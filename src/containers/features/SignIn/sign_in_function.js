import { connectToDatabase } from "service/mongodb/util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  var nickname = "Santeri";
  var nickname = "Samulipoh10";
  switch (req.method){
    case 'GET':{
        const movies = await db
        .collection("login")
        .find({Username: nickname})
        .toArray();
        res.json(movies);
    }
  }
};