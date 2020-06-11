serve:
	docker-compose exec vuesplash_web php artisan serve --host 0.0.0.0 --port 8081
install:
	docker-compose exec vuesplash_web npm install
watch:
	docker-compose exec vuesplash_web npm run watch
ssh:
	docker-compose exec vuesplash_web bash