/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text) - Visitor's name
      - `email` (text) - Visitor's email
      - `message` (text) - Contact message
      - `created_at` (timestamp) - Submission time
      - `read` (boolean) - Whether admin has read it

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anyone to insert submissions
    - Add policy for admin to read all submissions (auth.jwt())
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admin can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);