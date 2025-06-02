import { createClient } from '@supabase/supabase-js';

// Reemplaza estos valores con tus credenciales de Supabase
const SUPABASE_URL = 'https://xtrwisgwwvjgffdqqyer.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0cndpc2d3d3ZqZ2ZmZHFxeWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyOTcyNTQsImV4cCI6MjA2Mzg3MzI1NH0.lR-NgzjEig9OqQFNZQI1vQvBycQTRA-L3Aj8uIUCFyM';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
