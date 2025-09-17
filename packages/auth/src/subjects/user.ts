import { z } from 'zod'

export const UserSubject = z.tuple([
    z.union([
        z.literal('manage'),
        z.literal('get'),
        z.literal('update'),
        z.literal('delete'),
    ]),
    z.literal('User')
])

export type ProjectSubject = z.infer<typeof UserSubject>;