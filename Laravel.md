-----------------------------------------------------------------------------------------------------------------------------
Generate, cmd, commands
--------
----------------------------------------------------------------------------------------------------------------------
Install Laravel
----------------------------------------------------------------------------------------------------------------------
        composer create-project laravel/laravel your-project-name 5.8*
----------------------------------------------------------------------------------------------------------------------
	copy .env.example .env
	
	php artisan key:generate

	php artisan --version

	php artisan make:middleware CustomAuth
	
	php artisan make:factory PostFactory --model=Post

	php artisan tinker
	factory(App\User::class, 200)->create();

	php artisan make:migration create_new_table_name --create=table_name
	php artisan make:migration update_table_name --table=table_name
	php artisan migrate:rollback
	php artisan migrate:fresh --seed

	php artisan make:model ModelName
	php artisan make:model ModelName (--migration | -m)
	php artisan make:model ModelName -mcr (migration, controller, resource)

	php artisan make:controller NameController --resource
	php artisan make:controller Admin/CategoryController --resource --api --model=Categories

    php artisan make:mail PlaceOrder
									
---------------------------------------------------------------------------------------------------------------------------
Command to clear cache
-----------------------------------------------------------------------------------------------------------------------------	
php artisan config:cache
php artisan cache:clear
php artisan view:clear
php artisan route:cache

php artisan optimize --force
-----------------------------------------------------------------------------------------------------------------------------