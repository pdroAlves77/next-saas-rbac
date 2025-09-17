import {
  AbilityBuilder,
  createMongoAbility,
  type CreateAbility,
  type MongoAbility,
} from '@casl/ability'

import z from 'zod'
import type { User } from './models/user'
import { permissions } from './permissions'
import { projectSubject } from './subjects/project'
import { UserSubject } from './subjects/user'
import { organizationSubject } from './subjects/organization'
import { inviteSubject } from './subjects/invite'
import { billingSubject } from './subjects/billing'

export * from './models/user'
export * from './models/project'
export * from './models/organization'

const appAbilitiesSchema = z.union([
  projectSubject,
  UserSubject,
  organizationSubject,
  inviteSubject,
  billingSubject,

  z.tuple([z.literal('manage'), z.literal('all')]),
])

type AppAbilities = z.infer<typeof appAbilitiesSchema>

export type AppAbility = MongoAbility<AppAbilities>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

export function defineAbilityFor(user: User) {
  const builder = new AbilityBuilder(createAppAbility)

  if (typeof permissions[user.role] !== 'function') {
    throw new Error(`Permissions for role "${user.role}" not found.`)
}

permissions[user.role](user, builder)

const ability = builder.build({
  detectSubjectType(subject) {
    return subject.__typename
  },
})

return ability
}