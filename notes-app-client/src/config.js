export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "eu-west-1",
        BUCKET: "notes-toot-pictures"
    },
    apiGateway: {
        REGION: "eu-west-1",
        URL: "https://8t99olkdkb.execute-api.eu-west-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "eu-west-1",
        USER_POOL_ID: "eu-west-1_FpyKLR9rC",
        APP_CLIENT_ID: "7untnlnvcelbuplgh1lcmubh5u",
        IDENTITY_POOL_ID: "eu-west-1:6536626c-d58c-41ce-b83a-ee145b0c6807"
    }
};
