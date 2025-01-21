
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { use } from "react";

export const MockInterview = pgTable('mockInterview', {
    id: serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResp').notNull(),
    jobPosition: varchar('jobPosition').notNull(),
    jobDesc: varchar('jobDesc').notNull(),
    jobExperience: varchar('jobExperience').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt').notNull(),
    mockId: varchar('mockId').notNull(),
})

export const UserAnswer = pgTable('userAnswer', {
    id: serial('id').primaryKey(),
    mockIdRef: varchar('mockId').notNull(),
    question: varchar('question').notNull(),
    correctAnswer: varchar('correctAnswer'),
    userAnswer: text('userAnswer'),
    feedback: text('feedback'),
    rating: text('rating'),
    userEmail: varchar('userEmail'),
    createdAt: varchar('createdAt'),
})