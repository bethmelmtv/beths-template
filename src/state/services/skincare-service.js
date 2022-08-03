import client from './supabase-client.js';

export async function getAllSkincare() {
  return await client.from('skincare').select('*');
}
