import { cache } from "react";

import { auth } from "@clerk/nextjs/server";

export const getUser = cache(async () => {
    const { userId } = await auth();

    if (!userId) {
        return null;
    }

    return { userId };
})