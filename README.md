# README

# Prerequisites
1. Postgres is installed and working
2. Yarn is installed on your system (see [Install Instructions for Yarn](https://yarnpkg.com/lang/en/docs/install))
3. RVM is installed and working with version in .ruby-version

# Setup
There's a "bootstrap" script that runs many of the common setup tasks for you. From the app root, run:
```
bin/bootstrap
```

# Bootup
This app uses Foreman to manage Rails and React simultaneously. To bootup this program run the following:
```
foreman start -f Procfile.dev-server
```

This assumes you have installed Foreman either before pulling this application or via the provided bootstrap script

# Tests
In order to run the ruby specs, do the following:

```
bundle exec rspec
```

In order to run the mocha specs, do the following:

```
yarn run test
```

Alternatively you can watch the tests for changes and have the system run tests automatically when saving:
```
yarn run test:watch
```