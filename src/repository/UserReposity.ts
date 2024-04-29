import { EntityRepository, Repository } from "typeorm"
import { user } from "../entity/User"

@EntityRepository(user)
class UsersRepositories extends Repository<user> {}

export { UsersRepositories }