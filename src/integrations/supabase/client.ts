// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kjzqoucvjhmjwwnraeky.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqenFvdWN2amhtand3bnJhZWt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3MDU0MzQsImV4cCI6MjA2ODI4MTQzNH0.qNIkGTNmekq7TrMe3xEW12TIMyT3idroZF9VamWs4Dg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});