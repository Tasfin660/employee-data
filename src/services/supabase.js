import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://ruyvxajqwkhxsakrfwrs.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1eXZ4YWpxd2toeHNha3Jmd3JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4MzgzNjIsImV4cCI6MjAzMjQxNDM2Mn0.Ts9zDShP_CpwQ9VEN2teIVEXeoxgUEOoBxKUDqzOdVA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
