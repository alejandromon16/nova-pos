import { query } from "./_generated/server";


export const get = query({
    args:{},
    handler: async (ctx) => {
        const products = await ctx.db.query('products').collect();

        return products;
    }
})