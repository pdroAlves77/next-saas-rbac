import {
  AbilityBuilder,
  createMongoAbility,
  type CreateAbility,
  type MongoAbility,
} from '@casl/ability'

import type { User } from './models/user'
import { permissions } from './permissions'
import type { UserSubject } from './subjects/user'
import type { ProjectSubject } from './subjects/project'

type AppAbilities = UserSubject | ProjectSubject | ['manage', 'all']

export type AppAbility = MongoAbility<AppAbilities>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

export function defineAbilitiesFor(user: User) {
  const builder = new AbilityBuilder(createAppAbility)

  if (typeof permissions[user.role] !== 'function') {
    throw new Error(`Role ${user.role} is not defined`)
}

  permissions[user.role](user, builder)

  const ability = builder.build()

  return ability
}