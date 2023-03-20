
# elect-archive

```
composer require laravel/breeze --dev
php artisan breeze:install react
npm install && npm run dev
php artisan serve
```

migrateする際に.envを編集（事前にDBも作成）
```
LOG_CHANNEL=stack
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=elect_archive_db
DB_USERNAME=postgres
DB_PASSWORD=password
```

```
php artisan migrate
```

500エラーが出た場合は.envがあるか確認する。
tailwind css 、emotionを利用してcssを適用する