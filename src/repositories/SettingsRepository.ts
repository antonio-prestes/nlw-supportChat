import {Repository, EntityRepository} from "typeorm";
import {Settings} from "../entities/settings";

@EntityRepository(Settings)
class SettingsRepository extends Repository<Settings>{

}

export  { SettingsRepository }