import client from './supabase-client.js';

export async function getAllSkincare() {
  const response = await client.from('skincare').select('*');
  console.log(response);
  return response;
}

export async function removeSkincare(id) {
  return await client.from('skincare').delete().eq('id', id).single();
}
