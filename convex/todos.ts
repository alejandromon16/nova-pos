import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const addTodo = mutation({
    args: {
        text: v.string()
    },
    handler: async (ctx, args) => {
        await ctx.db.insert('todos',{
            text: args.text
        })
    }
})

export const get = query({
    args: {},
    handler: async (ctx) => {
        const todos =  await ctx.db.query('todos').collect();
        return todos;
    }
})