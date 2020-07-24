export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-2-api-dev-attachmentsbucket-gdpv52kum0gl"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://azh2lsaj1l.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_O690CocoB",
      APP_CLIENT_ID: "2knbsi2tq68jusvbs8r5aq0jdo",
      IDENTITY_POOL_ID: "us-east-2:c1f9cd76-fae4-4e97-a738-e6399dcf4591"
    }
  };