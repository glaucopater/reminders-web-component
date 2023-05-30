// src/mocks/handlers.js
import { rest } from "msw";
import { CustomCardProps } from "../components/CustomCard";

const data: CustomCardProps[] = [
  {
    id: "1",
    title: "Buy Milk",
    date: new Date().getTime(),
  },
  {
    id: "2",
    title: "Meditate",
    date: new Date().getTime(),
  },
];

export const handlers = [
  rest.post("/reminders", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  rest.get("/reminders", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];
