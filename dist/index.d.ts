type SdkClientConstructor = new <T extends object>(ApiClass: new (config: {
    baseUrl: string;
    baseApiParams?: any;
}) => T, options: {
    baseUrl: string;
    /** Token to attach to every request as Bearer auth. */
    token?: string;
}) => T;
declare const SdkClient: SdkClientConstructor;

export { SdkClient };
