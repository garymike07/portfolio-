import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to send message" });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  // PDF download routes
  app.get("/api/resume", (req, res) => {
    const resumePath = path.join(process.cwd(), "attached_assets", "Resume_1755952081858.pdf");
    if (fs.existsSync(resumePath)) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Mike_Kagera_Resume.pdf"');
      res.sendFile(resumePath);
    } else {
      res.status(404).json({ error: "Resume not found" });
    }
  });

  app.get("/api/degree", (req, res) => {
    const degreePath = path.join(process.cwd(), "attached_assets", "degree_1755952081915.pdf");
    if (fs.existsSync(degreePath)) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Mike_Kagera_Degree_Certificate.pdf"');
      res.sendFile(degreePath);
    } else {
      res.status(404).json({ error: "Degree certificate not found" });
    }
  });

  app.get("/api/kcse", (req, res) => {
    const kcsePath = path.join(process.cwd(), "attached_assets", "kcse_1755952081949.pdf");
    if (fs.existsSync(kcsePath)) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Mike_Kagera_KCSE_Certificate.pdf"');
      res.sendFile(kcsePath);
    } else {
      res.status(404).json({ error: "KCSE certificate not found" });
    }
  });

  app.get("/api/internship", (req, res) => {
    const internshipPath = path.join(process.cwd(), "attached_assets", "internship_1755952081988.pdf");
    if (fs.existsSync(internshipPath)) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Mike_Kagera_Internship_Certificate.pdf"');
      res.sendFile(internshipPath);
    } else {
      res.status(404).json({ error: "Internship certificate not found" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
