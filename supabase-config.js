const SUPABASE_URL = "postgresql://postgres:Resendiz123/@db.glgbtjikjbryjonhdmxh.supabase.co:5432/postgres";
const SUPABASE_KEY = "sb_publishable_l7paumwEbRpgnskqxDbTLA_tVO4M3bU";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);