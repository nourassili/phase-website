import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSignupSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist signup endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistSignupSchema.parse(req.body);
      
      // Check if email already exists
      const existingSignup = await storage.getWaitlistSignupByEmail(validatedData.email);
      if (existingSignup) {
        return res.status(409).json({ 
          message: "Email already exists in waitlist",
          success: false 
        });
      }

      const signup = await storage.createWaitlistSignup(validatedData);
      res.status(201).json({ 
        message: "Successfully joined waitlist!",
        success: true,
        data: { id: signup.id, email: signup.email }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid email format",
          success: false,
          errors: error.errors 
        });
      }
      res.status(500).json({ 
        message: "Internal server error",
        success: false 
      });
    }
  });

  // Get waitlist stats endpoint
  app.get("/api/waitlist/stats", async (req, res) => {
    try {
      const signups = await storage.getAllWaitlistSignups();
      res.json({ 
        total: signups.length,
        success: true 
      });
    } catch (error) {
      res.status(500).json({ 
        message: "Internal server error",
        success: false 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
