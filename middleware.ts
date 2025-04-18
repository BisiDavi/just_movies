import { NextRequest, NextResponse } from "next/server";

const corsHeaders = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export function middleware(request: NextRequest) {
	if (request.method === "OPTIONS") {
		return NextResponse.json({}, { headers: corsHeaders });
	}
	const response = NextResponse.next();
	Object.entries(corsHeaders).forEach(([key, value]) => {
		response.headers.append(key, value);
	});

	return response;
}

export const config = {
	matcher: "/api/:the_ambulance_company_welcome_mail",
};
