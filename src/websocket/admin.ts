import {io} from "../http";
import { ConnectionsServices} from "../services/ConnectionsServices";

io.on("connect", async (socket) => {
    const connectionServices = new ConnectionsServices()

    const allConnectionsWithoutAdmin = await connectionServices.findAllWithoutAdmin()

    io.emit("admin_list_all_users", allConnectionsWithoutAdmin);
})