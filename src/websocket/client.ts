import {io} from "../http"
import {ConnectionsServices} from "../services/ConnectionsServices";
import {UsersServices} from "../services/UsersServices";


io.on("connect", (socket) => {
    const connectionsService = new ConnectionsServices()
    const usersService = new UsersServices()

    socket.on("client_first_access", async (params) => {
        const socket_id = socket.id
        const {text, email} = params

        const userExists = await usersService.findByEmail(email)
        if (!userExists) {
            const user = await usersService.create(email)
            await connectionsService.create({
                socket_id,
                user_id: user.id
            })

        } else {
            await connectionsService.create({
                socket_id,
                user_id: userExists.id
            })
        }
    })
})