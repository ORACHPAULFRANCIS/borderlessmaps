-- Create inquiries table to store contact form submissions
CREATE TABLE public.inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert inquiries (public contact form)
CREATE POLICY "Anyone can submit inquiries" 
ON public.inquiries 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow authenticated users to view inquiries (for admin access)
CREATE POLICY "Authenticated users can view inquiries" 
ON public.inquiries 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_inquiries_updated_at
  BEFORE UPDATE ON public.inquiries
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();