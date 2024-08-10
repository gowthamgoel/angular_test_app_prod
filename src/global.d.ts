declare namespace google {
    namespace accounts {
        namespace oauth2 {
            interface TokenClient {
                requestAccessToken(options?: {
                    prompt?: string;
                    hint?: string;
                    state?: string;
                    scope?: string;
                    callback?: (response: any) => void;
                }): void;
            }

            function initTokenClient(config: {
                client_id: string;
                scope: string;
                callback: (tokenResponse: any) => void;
            }): TokenClient;
        }

        namespace id {
            function disableAutoSelect(): void;
        }
    }
}
