import client from './supabase-client.js';

export async function getTeaFamiliesWithTeas() {
  const response = await client.from('tea_family').select(`
  id,
  family,
  teas (
    tea_family_id,
    tea_name
  )
`);
  console.log(response);
  return response;
}

export async function removeTeaFamily(id) {
  return await client.from('tea_family').delete().eq('id', id).single();
}

export async function addTeaFamily(family) {
  return await client.from('tea_family').insert(family).single();
}

export async function updateTeaFamily(id, familyUpdate) {
  return await client
    .from('tea_family')
    .update(familyUpdate)
    .eq('id', id)
    .single();
}

export async function addTea(tea) {
  return await client.from('teas').insert(tea).single();
}
