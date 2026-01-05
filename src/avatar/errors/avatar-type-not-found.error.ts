// avatar/errors/avatar-type-not-found.error.ts

export class AvatarTypeNotFoundError extends Error {
    public readonly category: string;
    public readonly value: string;

    public constructor(category: string, value: string) {
        super(`Avatar ${category} type '${value}' does not exist.`);
        this.name = "AvatarTypeNotFoundError";
        this.category = category;
        this.value = value;
    }
}
