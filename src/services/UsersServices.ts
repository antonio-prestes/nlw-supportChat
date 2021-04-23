import {getCustomRepository, Repository} from "typeorm";
import {UserRepository} from "../repositories/UserRepository";
import {User} from "../entities/User";

class UsersServices {
    private userRepository: Repository<User>

    constructor() {
        this.userRepository = getCustomRepository(UserRepository);
    }

    async create(email: string) {
        const userExists = await this.userRepository.findOne({
            email
        })
        if (userExists) {
            return userExists
        }
        const user = this.userRepository.create({
            email
        });
        await this.userRepository.save(user)
        return user
    }
}

export {UsersServices}