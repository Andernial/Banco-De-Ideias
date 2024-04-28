import { Router } from "express"
import { ExemploRouter } from "./exemplo.routes.js"
import { AdmRouter } from "./adm.routes.js"
import { UserRouter } from "./user.routes.js"
import { PostRouter } from "./project.routes.js"

const routers = Router()

routers.use("/exemplo", ExemploRouter)
routers.use("/adm", AdmRouter)
routers.use("/user", UserRouter)
routers.use("/project", PostRouter)

export { routers }