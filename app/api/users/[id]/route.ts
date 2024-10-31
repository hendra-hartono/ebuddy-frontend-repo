import { NextRequest, NextResponse } from "next/server";
import { userSchema } from "@/app/validationSchema";
import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const url = publicRuntimeConfig.apiUrl + "/users/" + params.id;
  const user = await axios.get(url);
  return NextResponse.json(user.data);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = userSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const url = publicRuntimeConfig.apiUrl + "/users/" + params.id;
  await axios.put(url, {
    name: body.name,
    email: body.email,
    mobilePhone: body.mobilePhone,
  });

  return NextResponse.json({});
}
