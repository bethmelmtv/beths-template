import client from './supabase-client.js';

export function getUser() {
  return client.auth.user();
}

export async function signUp(credentials) {
  return await client.auth.signUp(credentials);
}

export async function signIn(credentials) {
  return await client.auth.signIn(credentials);
}

export async function signOut() {
  return await client.auth.signOut();
}

const PROFILE = 'profile';

export function getLocalProfile() {
  const json = localStorage.getItem(PROFILE);
  if (!json) return null;
  try {
    return JSON.parse(json);
  } catch (err) {
    localStorage.removeItem(PROFILE);
  }
}
