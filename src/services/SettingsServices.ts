import {getCustomRepository, Repository} from "typeorm";
import {SettingsRepository} from "../repositories/SettingsRepository";
import {Settings} from "../entities/settings";

interface ISettingsCreate {
    chat: boolean;
    username: string;
}


class SettingsServices {
    private settingsRepository: Repository<Settings>

    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository)
    }

    async create({chat, username}: ISettingsCreate) {
        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        });

        if (userAlreadyExists) {
            throw new Error("User already exist!")
        }

        const settings = this.settingsRepository.create({
            chat,
            username
        });

        await this.settingsRepository.save(settings)

        return settings;
    }
}

export {SettingsServices}