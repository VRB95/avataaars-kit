// avatar/internal/type-resolver.ts

import { AvatarTypeNotFoundError } from "../errors/avatar-type-not-found.error";

export function resolveType<T extends string>(
    category: string,
    map: Record<T, unknown>,
    value: string,
): T {
    if (value in map) {
        return value as T;
    }

    throw new AvatarTypeNotFoundError(category, value);
}


export function resolveValue<T extends string>(
    category: string,
    values: readonly T[],
    value: string,
): T {
    if (values.includes(value as T)) {
        return value as T;
    }

    throw new AvatarTypeNotFoundError(category, value);
}
