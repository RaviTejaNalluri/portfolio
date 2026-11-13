// Add your certifications here. They appear on the About page in this order.

export type Certification = {
	name: string;
	issuer: string;
	date?: string; // e.g. 'Mar 2026' (leave empty to hide)
	credentialUrl?: string; // link to verify (Credly, Coursera, etc.)
};

export const certifications: Certification[] = [
	{
		name: 'AWS Certified Generative AI Developer - Professional',
		issuer: 'Amazon Web Services',
		date: '', // TODO: issue date, e.g. 'Oct 2026'
		credentialUrl: 'https://www.credly.com/badges/e1db144d-76e1-4929-9c2d-322424b35941',
	},
	{
		name: 'Microsoft Certified: Machine Learning Operations Engineer Associate',
		issuer: 'Microsoft',
		date: '', // TODO: issue date
		credentialUrl:
			'https://learn.microsoft.com/api/credentials/share/en-us/RAVITEJAN-4861/1B4F3363D1C194AF?sharingId=A33F25A5C2D7675E',
	},
	{
		name: 'Microsoft Certified: Azure AI Fundamentals',
		issuer: 'Microsoft',
		date: '', // TODO: issue date
		credentialUrl:
			'https://learn.microsoft.com/api/credentials/share/en-us/RAVITEJAN-4861/BE287B9E812D124?sharingId=A33F25A5C2D7675E',
	},
];
