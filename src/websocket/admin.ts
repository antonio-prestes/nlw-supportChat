import {io} from "../http";
import {ConnectionsServices} from "../services/ConnectionsServices";
import {MessagesService} from "../services/MessagesService";

io.on("connect", async (socket) => {
    const connectionServices = new ConnectionsServices()
    const messageServices = new MessagesService()

    const allConnectionsWithoutAdmin = await connectionServices.findAllWithoutAdmin()

    io.emit("admin_list_all_users", allConnectionsWithoutAdmin);

    socket.on("admin_list_messages_by_user", async (params, callback) => {
        const {user_id} = params;
        const allMessages = await messageServices.listByUser(user_id);

        callback(allMessages)
    })
})