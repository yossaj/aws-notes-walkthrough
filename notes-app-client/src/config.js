export default {
    s3: {
        REGION: "eu-west-1",
        BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-3npsgk7u2d5l"
    },
    apiGateway: {
        REGION: "eu-west-1",
        URL: "https://8t99olkdkb.execute-api.eu-west-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "eu-west-1",
        USER_POOL_ID: "eu-west-1_FpyKLR9rC",
        APP_CLIENT_ID: "7untnlnvcelbuplgh1lcmubh5u",
        IDENTITY_POOL_ID: "eu-west-1:1370cca4-7f06-4b12-9878-f5e669302cac"
    }
};
