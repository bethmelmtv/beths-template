/* eslint-disable max-len */
import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL = 'https://nwxkvnsiwauieanvbiri.supabase.co';

const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzAwMzQzNCwiZXhwIjoxOTUyNTc5NDM0fQ.8XIsU0FANdaNeQnT-DojpTL-GTlTPZ4CYZDEetpFpWc';

export const client = createClient(SUPABASE_URL, SUPABASE_KEY);

///use reducer hook, load add update remove, => telling data what to do next
///payload is a word that reducer

//header and navigation with outlet
//what is an outlet? like children//

//client js > fuzzy_bunny_service > fuzzy_bunny.jsx> app.js>
