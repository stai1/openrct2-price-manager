export default class SavePersistence implements Persistence {
    public get<T>(key: keyof IConfig, defaultValue: T): T {
        return context.getParkStorage().get(key, defaultValue);
    }

    public set<T>(key: keyof IConfig, value: T): void {
        return context.getParkStorage().set(key, value);
    }
}
