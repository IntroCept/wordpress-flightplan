# wordpress-flightplan
Deploying WordPress theme with flightplan

## Installation

```bash
# install the cli tool
$ npm install -g flightplan

$ git clone git@github.com:IntroCept/wordpress-flightplan.git
$ cd wordpress-flightplan
$ npm install
# do you wordpress theme stuff make a amazing theme
```

## Configuration
- Open flightplan.js
- Change the values for host,username
- You can use password or private key to authenticate remove which you don't use and change the value as needed

## Usage
```bash
# run a flightplan (`fly --help` for more information)
$ fly <environment>
# Deploying on staging
$ fly staging
```
