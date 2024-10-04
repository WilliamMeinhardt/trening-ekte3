import { PrismaClient } from "@prisma/client"


const db = new PrismaClient();

export default async function Page() {
    const trainers = await db.trainer.findMany();

    return(
        <div>
            {trainers?.map((x: any, i: any) => {
                return(
                    <div key={i}>
                        {JSON.stringify(x)}
                    </div>
                )
            })}
        </div>
    )
}