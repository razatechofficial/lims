// api/user/route.ts
import connectMongoDB from "@/lib/dbConnection/MongoDB";
import User from "@/lib/modals/user";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    // receiving the data and parsing into json
    const body = await request.json();
    // Connect to the database
    await connectMongoDB();

    // Creating a new instanse to create a new user
    const newUser = new User(body);
    await newUser.save();

    return new NextResponse(
      JSON.stringify({ message: "User is created", user: newUser }),
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse("Error in creating user" + error.message, {
      status: 500,
    });
  }
};
