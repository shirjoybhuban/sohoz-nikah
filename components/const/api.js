/**
 * API Server Related Constants.
 */
const local = false;
const protocol = local ? 'http://' : 'https://';
const host = local ? '127.0.0.1:8010' : 'api.serveradviser.com';

const front = 'https://review-and-rating.vercel.app/';
const frontOne = 'https://serveradviser.com/';

export const siteUrl = local ? 'http://localhost:3000' : frontOne;
export const baseUrl = `${protocol + host}`;
