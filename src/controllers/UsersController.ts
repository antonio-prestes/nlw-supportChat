import {Request, Response} from "express";
import {UsersServices} from "../services/UsersServices";

class UsersController {

    async create(request: Request, response: Response): Promise<Response> {
        const {email} = request.body
        const userService = new UsersServices();
        const user = await userService.create(email);
        return response.json(user)

    }
}

export {UsersController}