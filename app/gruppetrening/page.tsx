import {PrismaClient} from "@prisma/client"

const db = new PrismaClient();

export default async function Page() {
    const Groupworkout = await db.groupWorkout.findMany({});

    console.log(Groupworkout);

    return(
        <div>
            hei
        </div>
    )
}