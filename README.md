# ba.wis.space
ビジネスエアポートの各拠点の営業状況を表示するサイト(非公式)です

## デモ
https://ba.boci.jp

※AWS SAMを使ってlocaltion.jsonを更新しています

## S3 Sync
```bash
// dryrun
$ aws s3 sync --dryrun --exclude '*' --include '*.html' --include '*.css' --include '*.js' ./ s3://{bucket-name}/
// sync
$ aws s3 sync --exclude '*' --include '*.html' --include '*.css' --include '*.js' ./ s3://{bucket-name}/
```
