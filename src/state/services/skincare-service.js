import client from './supabase-client.js';

export async function getAllSkincare() {
  const response = await client.from('skincare').select('*');
  console.log(response);
  return response;
}
