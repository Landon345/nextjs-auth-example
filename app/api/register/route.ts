/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { login } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { Email, Password, FirstName, LastName, Phone, SSN } = body;

    // 1. Basic Validation
    if (!Email || !Password || !FirstName || !LastName || !SSN) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // 2. Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ Email: Email }, { SSN: SSN }],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email or SSN already exists" },
        { status: 409 },
      );
    }

    // 3. Hash the password
    // The "10" is the saltRounds, which determines how secure the hash is
    const hashedPassword = await bcrypt.hash(Password, 10);

    // 4. Create the user in the database
    const newUser = await prisma.user.create({
      data: {
        Email,
        Password: hashedPassword,
        FirstName,
        LastName,
        Phone,
        SSN,
        Role: "patient", // Defaulting to patient as per your schema
      },
    });

    // 5. Automatically log them in after registration
    await login({
      UserID: newUser.UserID,
      Email: newUser.Email,
      FirstName: newUser.FirstName,
      LastName: newUser.LastName,
    });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
