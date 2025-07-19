import './../foodOrder.css';

import {z} from 'zod';

export  const authSchema = z.object({
    fullName: z.string().min(1, "Full Name is required"),
    email: z.email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    city: z.string().min(1, "City is required"),
});

