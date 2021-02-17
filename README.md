# Directus for Heroku

<p align="center">
    <a href="https://heroku.com/deploy?template=https://github.com/directus-community/heroku-template">
        <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
    </a>
</p>

This template demonstrates building Directus for Heroku. It contains addons to let you run Directus with PostgreSQL and Redis.

## Features

* Node.js (via [nodejs buildpack](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-nodejs))
* PostgreSQL (via [postgresql addon](https://elements.heroku.com/addons/heroku-postgresql))
* Redis (via [redis addon](https://elements.heroku.com/addons/heroku-redis))
* Email (via [mailgun addon](https://elements.heroku.com/addons/mailgun))

## File uploads

Make sure to configure the storage settings for your project, otherwise you won't be able to upload files to your instance. This template has some placeholder settings to guide on how to configure storage using DigitalOcean spaces, but you can use any (non local) compatible storage service in Heroku. For more information on how to configure Directus storage, check our [supported environment variables](https://docs.directus.io/reference/environment-variables/#file-storage).

## Post-install

### Email settings

This template uses Mailgun starter addon to setup emails for you project. It's highly recommended that you configure the email to your preferred settings after provisioning your project.

### Admin user

Your initial admin email and password is created based on `ADMIN_EMAIL` and `ADMIN_PASSWORD` you set on project creation. If you don't have those set, random ones are going to be provisioned for you, and you must check the deployment logs via `heroku releases` to get them.

After you log in for the first time, be sure to update your email and password immediately and remove those variables from your environment.

### Database

This template uses PostgreSQL, but Directus supports [a number of other options](https://docs.directus.io/guides/installation/cli.html#_1-confirm-minimum-requirements-are-met) that can be easily substituted using other Heroku addons. 

- [MySQL](https://elements.heroku.com/addons/jawsdb)
- [PostgreSQL](https://elements.heroku.com/addons/heroku-postgresql)
- [SQL Server](https://elements.heroku.com/addons/mssql)

## References

* [Directus Documentation](https://docs.directus.io/getting-started/introduction.html)
* [Heroku Documentation](https://devcenter.heroku.com/articles/getting-started-with-nodejs)