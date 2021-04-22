import {getCustomRepository} from "typeorm";
import {SettingsRepository} from "../repositories/SettingsRepository";

interface ISettingsCreate {
    chat: boolean;
    username: string;
}


class SettingsServices {

    async create({chat, username}: ISettingsCreate) {
        const settingsRepository = getCustomRepository(SettingsRepository)

        const userAlreadyExists = await settingsRepository.findOne({
            username
        });

        if (userAlreadyExists) {
            throw new Error("User already exist!")
        }

        const settings = settingsRepository.create({
            chat,
            username
        });

        await settingsRepository.save(settings)

        return settings;
    }
}

export {SettingsServices}