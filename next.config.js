/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["m.media-amazon.com"],
	},
	headers: [
		{
			// matching all API routes
			source: "/api/the_ambulance_company_welcome_mail",
			headers: [
				{ key: "Access-Control-Allow-Credentials", value: "true" },
				{ key: "Access-Control-Allow-Origin", value: "*" },
				{ key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
				{
					key: "Access-Control-Allow-Headers",
					value: "Content-Type",
				},
			],
		},
	],
};

module.exports = nextConfig;