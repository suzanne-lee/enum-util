export declare enum Enum {
}
export declare type StringEnum<E extends typeof Enum> = {
    [key in keyof E]: key;
};
export declare function getKeys<E extends typeof Enum>(e: E): (keyof E)[];
export declare function getValues<E extends typeof Enum>(e: E): (E[keyof E])[];
export declare function isKey<E extends typeof Enum>(e: E, str: string): str is keyof E;
export declare function toStringEnum<E extends typeof Enum>(e: E): StringEnum<E>;
export declare function isValue<E extends typeof Enum>(e: E, mixed: any): mixed is E[keyof E];
export declare function extractValues<E extends typeof Enum>(e: E, arr: any[]): (E[keyof E])[];
export declare function toKey<E extends typeof Enum, K extends keyof E>(e: E, value: E[K]): K;
export declare function toKey<E extends typeof Enum>(e: E, value: E[keyof E]): keyof E;
export declare function toKey<E extends typeof Enum>(e: E, mixed: any): (keyof E) | undefined;
export declare class WrappedEnum<E extends typeof Enum> {
    private readonly e;
    private readonly keys;
    private readonly values;
    constructor(e: E);
    getEnum(): E;
    getKeys(): (keyof E)[];
    getValues(): E[keyof E][];
    isKey(str: string): str is keyof E;
    toStringEnum(): StringEnum<E>;
    isValue(mixed: any): mixed is E[keyof E];
    extractValues(arr: any[]): (E[keyof E])[];
    toKey<K extends keyof E>(mixed: E[K]): K;
    toKey(mixed: E[keyof E]): keyof E;
    toKey(mixed: any): (keyof E) | undefined;
}
