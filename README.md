# ba.wis.space
bisinss airport location site

S3 Sync
```bash
// dryrun
$ aws s3 sync --dryrun --exclude '*' --include '*.html' --include '*.css' --include '*.js' ./ s3://ba.boci.jp/
// sync
$ aws s3 sync --exclude '*' --include '*.html' --include '*.css' --include '*.js' ./ s3://ba.boci.jp/
```
