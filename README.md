# JS_Landing

Official JS Club landing webpage use for gen 11 recruitment.

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm install
npm run build
```

Then, you can find the public build files in `dist` folder. You can serve it with any static server or CDN.

## Deployment

Commits pushed to the `main` branch are automatically deployed to [ttv.jsclub.me](https://ttv.jsclub.me) and [jsclub.me](https://jsclub.me) by Vercel.

## Extra: Active super fast mode during extreme traffic

_This has been turned off and can be turned on when needed._

This is a solution for extreme traffic, by deploying to AWS Cloudfront using Github Actions, our page will be served to 200+ edge locations around the world for unbeatable performance.

To enable this, first create a S3 bucket in AWS S3, and make it public.

Note: when create a S3 public bucket, config the Bucket's Permissions > Bucket policy as follows:

```json
{
 "Version": "2008-10-17",
 "Statement": [
  {
   "Sid": "AllowPublicRead",
   "Effect": "Allow",
   "Principal": {
    "AWS": "*"
   },
   "Action": "s3:GetObject",
   "Resource": "arn:aws:s3:::<your-s3-bucket-name>/*"
  }
 ]
}
```

Then create a Cloudfront distribution with the S3 bucket as the origin.

Finally, you need to add **Github Secrets** via the Github UI with the following keys:

```bash
AWS_ACCESS_KEY_ID=<your_aws_access_key_id here>
AWS_SECRET_ACCESS_KEY=<your_aws_secret_access_key here>
S3_BUCKET=<your_s3_bucket_name here, this is global-unique, e.g. jsclub-landing>
S3_BUCKET_REGION=<your_s3_bucket_region here, e.g. ap-southeast-1>
CLOUDFRONT_DISTRIBUTION_ID=<your_cloudfront_distribution_id here, e.g. E1OYW0HM207TH>
```

Then point the domain to the Cloudfront distribution (something like `duwypkncy9qm9.cloudfront.net`), not the S3 bucket.

After these steps, commits pushed to the `main` branch will be automatically deployed (CI/CD) to [ttv.jsclub.me](https://ttv.jsclub.me) on AWS Cloudfront by Github Actions.

## Contributors

- [@thaiminhpv](https://github.com/thaiminhpv)
- [@pqhung3007](https://github.com/pqhung3007)
