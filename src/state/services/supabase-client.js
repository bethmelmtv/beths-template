/* eslint-disable max-len */
import { createClient } from '@supabase/supabase-js';
const SUPABASE_URL = 'https://zwaquhawqyttxdrcbhxx.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3YXF1aGF3cXl0dHhkcmNiaHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTE5ODEsImV4cCI6MTk2MzEyNzk4MX0.FnfsYqPR7GPz5COh7itHiDt6as7-F__iU57NyG7IKyE';

export default createClient(SUPABASE_URL, SUPABASE_KEY);
