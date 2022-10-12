# Audition Database

Capstone Project for Flatiron School: React/Rails API - Full Stack Application
Check out the live frontend [_here_](https://audition-database.herokuapp.com/)

## GitHub Repo

- [Monorepo - frontend and backend servers](https://github.com/aaronwertheim/Auditions)

## Technologies Used

- Ruby 2.7.4
- Rails 7.0.3.1
- Active Model Serializers 0.10.12
- NodeJS (v16), and npm
- Heroku CLI
- Postgresql 1.1
- bcrypt 3.1.7
- React 18.2.0
- React-Router-Dom 5.3.3
- Pure-React-Carousel 1.29.0
- TailwindCSS 3.1.8

## Environment Setup

### Clone repository

**clone** the project repository from github: [https://github.com/aaronwertheim/Auditions](https://github.com/aaronwertheim/Auditions)

```console
$ git clone https://github.com/aaronwertheim/Auditions
```

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```sh
ruby -v
```

Make sure that the Ruby version you're running is listed in the [supported
runtimes][] by Heroku. At the time of writing, supported versions are 2.6.8,
2.7.4, or 3.0.2. 

If it's not, you can use `rvm` to install a newer version of Ruby:

```sh
rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```sh
gem install bundler
gem install rails
```

[supported runtimes]: https://devcenter.heroku.com/articles/ruby-support#supported-runtimes

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```
### Install Postgresql

Heroku requires that you use PostgreSQL for your database instead of SQLite.
PostgreSQL (or just Postgres for short) is an advanced database management
system with more features than SQLite. If you don't already have it installed,
you'll need to set it up.

#### PostgreSQL Installation for WSL

To install Postgres for WSL, run the following commands from your Ubuntu terminal:

```sh
sudo apt update
sudo apt install postgresql postgresql-contrib libpq-dev
```

Then confirm that Postgres was installed successfully:

```sh
psql --version
```

Run this command to start the Postgres service:

```sh
sudo service postgresql start
```

Finally, you'll also need to create a database user so that you are able to
connect to the database from Rails. First, check what your operating system
username is:

```sh
whoami
```

If your username is "ian", for example, you'd need to create a Postgres user
with that same name. To do so, run this command to open the Postgres CLI:

```sh
sudo -u postgres -i
```

From the Postgres CLI, run this command (replacing "ian" with your username):

```sh
createuser -sr ian
```

Then enter `control + d` or type `logout` to exit.

[This guide][postgresql wsl] has more info on setting up Postgres on WSL if you
get stuck.

[postgresql wsl]: https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql

#### Postgresql Installation for OSX

To install Postgres for OSX, you can use Homebrew:

```sh
brew install postgresql
```

Once Postgres has been installed, run this command to start the Postgres
service:

```sh
brew services start postgresql
```

### Application Install

When you're ready to start building your project, run:

```sh
bundle install
rails db:create
npm install --prefix client
```

## Server Start

You can use the following commands to run the application:

- `rails db:migrate db:seed`: migrate and seed the database (use `db:seed:replant` if this is not the first time running)
- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

  ### Backend Shutdown

It should be possible to shutdown the server using [CTRL-C]. If that fails, follow these steps:

- `lsof -i tcp:9292`
  response:
  COMMAND PID USER ....
  ruby 1234 root ....
- `kill -9 1234`

## Usage for Performer Account

1. [`Login`] with your username & password. If this is your first time, create a user profile [`Sign Up`] and select [`Performer`].
2. Select [`See all Casting Calls`] to view a list of all casting calls.
3. Select [`Audition`] to view specific audition form and additional show details. 
4. To successfully [`Submit`], audition time must be an available interval, headshot must be image/jpeg, resume must be application/pdf. Role is optional.
5. Select [`View My Auditions`] to view a list of your scheduled auditions. You may edit the time and role to your audition or delete the audition.
6. Select [`Messages`] to view a list of messages sent from casting directors. You may view the message content, reply to the message, or delete it.
7. [`Logout`] when finished.

## Usage for Director Account

1. [`Login`] with your username & password. If this is your first time, create a user profile [`Sign Up`] and select [`Casting Director`].
2. Select [`My Casting Calls`] to view a list of all casting calls you have submitted. You can edit and delete the casting calls. Submissions for a particular show can be rendered by selecting [`Submissions`]. Headshot/Resumes can be viewed and messages to performers can be sent.
3. Select [`Add a Show`] to route to the new show form. Add the audition date, title, start time, end time, and timeslot to successfully submit. 
4. Select [`Messages`] to view a list of replies to your messages. You may add additional replies or delete the message.
5. [`Logout`] when finished.

## Deploying To Heroku

This application is implemented as a mono-repo (frontend and backend implementation in a single GitHub repository). It has been deployed to Heroku.

### System prep for Heroku deployment

### Sign Up for a [Heroku Account][heroku signup]

You can sign up at for a free account at
[https://signup.heroku.com/devcenter][heroku signup].

### Download the [Heroku CLI][heroku cli] Application

Download the Heroku CLI. For OSX users, you can use Homebrew:

```sh
brew tap heroku/brew && brew install heroku
```

For WSL users, run this command in the Ubuntu terminal:

```sh
curl https://cli-assets.heroku.com/install.sh | sh
```

If you run into issues installing, check out the [Heroku CLI][heroku cli]
downloads page for more options.

After downloading, you can login via the CLI in the terminal:

```sh
heroku login
```

This will open a browser window to log you into your Heroku account. After
logging in, close the browser window and return to the terminal. You can run
`heroku whoami` in the terminal to verify that you have logged in successfully.

[heroku signup]: https://signup.heroku.com/devcenter
[heroku cli]: https://devcenter.heroku.com/articles/heroku-cli#download-and-install

### Deploying

Once you've set up your environment to deploy to Heroku, you can run the
commands below to deploy your application.

First, log in to your Heroku account using the Heroku CLI:

```sh
heroku login
```

Create the new Heroku app:

```sh
heroku create my-app-name
```

Add the buildpacks for Heroku to build the React app on Node and run the Rails
app on Ruby:

```sh
heroku buildpacks:add heroku/nodejs --index 1
heroku buildpacks:add heroku/ruby --index 2
```

To deploy, commit your code and push the changes to Heroku:

```sh
git add .
git commit -m 'Commit message'
git push heroku main
```

> Note: depending on your Git configuration, your default branch might be named
> `master` or `main`. You can verify which by running
> `git branch --show-current`. If it's `master`, you'll need to run
> `git push heroku master` instead.

Any time you have changes to deploy, just make sure your changes are committed
on the main branch of your repo, and push those changes to Heroku to deploy
them.

You can view your deployed app with:

```sh
heroku open
```

### Linking to GitHub for auto-deployment

Once your app is deployed, you can modify settings to link Heroku to your GitHub repository, and configure so that updates to the Main branch automatically deploy to Heroku.

Configure as shown here, on the Heroku->Deploy tab:

![Heroku Configuration](./assets/GitHub_Heroku.png?raw=true "Heroku configuration")

## Troubleshooting

If you ran into any errors along the way, here are some things you can try to
troubleshoot:

- If you're on a Mac and got a server connection error when you tried to run
  `rails db:create`, one option for solving this problem for Mac users is to
  install the Postgres app. To do this, first uninstall `postgresql` by running
  `brew remove postgresql`. Next, download the app from the
  [Postgres downloads page][postgres downloads page] and install it. Launch the
  app and click "Initialize" to create a new server. You should now be able to
  run `rails db:create`.

- If you're using WSL and got the following error running `rails db:create`:

  ```txt
  PG::ConnectionBad: FATAL:  role "yourusername" does not exist
  ```

  The issue is that you did not create a role in Postgres for the default user
  account. Check [this video](https://www.youtube.com/watch?v=bQC5izDzOgE) for
  one possible fix.

- If your app failed to deploy at the build stage, make sure your local
  environment is set up correctly by following the steps at the beginning of
  this lesson. Check that you have the latest versions of Ruby and Bundler, and
  ensure that Postgresql was installed successfully.

- If you deployed successfully, but you ran into issues when you visited the
  site, make sure you migrated and seeded the database. Also, make sure that
  your application works locally and try to debug any issues on your local
  machine before re-deploying. You can also check the logs on the server by
  running `heroku logs`.

For additional support, check out these guides on Heroku:

- [Deploying a Rails 6 App to Heroku][heroku rails deploying guide]
- [Rails Troubleshooting on Heroku][troubleshooting guide on heroku]

[postgres downloads page]: https://postgresapp.com/downloads.html
[heroku rails deploying guide]: https://devcenter.heroku.com/articles/getting-started-with-rails6
[troubleshooting guide on heroku]: https://devcenter.heroku.com/articles/getting-started-with-rails6#troubleshooting

## Acknowledgements

This project based on:

- [This Project Template](https://github.com/learn-co-curriculum/project-template-react-rails-api).
- [This Authentication Template](https://github.com/learn-co-curriculum/phase-4-rails-putting-it-all-together-auth).
- [Install Tailwind](https://tailwindcss.com/docs/guides/create-react-app).
- [Active Storage Setup](https://medium.com/@hkassow/rails-active-storage-forget-to-struggle-320a43214963).