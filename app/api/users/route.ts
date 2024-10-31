import { NextRequest, NextResponse } from "next/server";
import { userSchema } from "../../validationSchema";
import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export async function GET(request: NextRequest) {
  const url = publicRuntimeConfig.apiUrl + "/users";
  const users = await axios.get(url);
  return NextResponse.json(users.data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = userSchema.safeParse(body);
  if (!validation.success)
    // return NextResponse.json(validation.error.errors, { status: 400 });
    return NextResponse.json(validation.error.format(), { status: 400 });

  const url = publicRuntimeConfig.apiUrl + "/users";
  await axios.post(url, {
    name: body.name,
    email: body.email,
    mobilePhone: body.mobilePhone,
  });

  return NextResponse.json({}, { status: 201 });
}
