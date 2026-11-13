// Add your certifications here. They appear on the About page, newest first.

export type Certification = {
	name: string;
	issuer: string;
	date: string; // e.g. '2026-03' or 'Mar 2026'
	credentialUrl?: string; // link to verify (Credly, Coursera, etc.)
};

export const certifications: Certification[] = [
	{
		name: 'Example: AWS Certified Cloud Practitioner',
		issuer: 'Amazon Web Services',
		date: 'Mar 2026',
		credentialUrl: '',
	},
	{
		name: 'Example: Another Certification',
		issuer: 'Issuing Organization',
		date: 'Jan 2026',
	},
];
