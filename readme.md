
[Overview](#surfinch)
[Create Surfinch from Source Code](#creating-surfinch-app-from-source-code)
[Usage](#usage)
[Contribute](#contributing)



# <p align="center"> Surfinch </p>  <p align="center"><img src="https://i.imgur.com/6pDMm0T.png"  width="100"  height="auto"></p>


This app is for bird watchers (birders) to track sightings and compare with other birders in your Surfinch network.

Have you ever found yourself unable to digitally track bird sightings? This app will let you sign-up, login, and build a network of other birders posting their favorite photos of sightings.

Additionally, in this app, you are able to research essential bird data. Tracking is easy with the use of interactive forms and maps. Data will be stored to each user's profile and will be accessible during new sessions.

  ### Review Source Code
  [Surfinch](https://github.com/Kauri-2021/Surfinch)

## Creating Surfinch App from Source Code

- [ ] Obtain the code for this app using the above link or following step:
	- [ ] Start by cloning:
```
git clone https://github.com/tobefranklyspeaking/ohhhdecisions.git
```


### Download or Generate Essential Items

- [ ] Follow the directions in each following link and obtain API keys:

	- [ ] [Ebird API](https://documenter.getpostman.com/view/664302/S1ENwy59)

	- [ ] [LocationIQ](https://us1.locationiq.com/)

	- [ ] [Google API](https://developers.google.com/identity/protocols/oauth2)

- [ ] In cloned repository create file config.js and according to the example in config.example.js.

- [ ] Download and install [MySQL](https://www.mysql.com/downloads/)
	- [ ] Follow instructions to create login and then run the following:

```
mysql -u <username> -p < schema.sql
```

### Install Dependencies

- [ ] Navigate to the directory where you downloaded this repository process the following commands:

```
git remote remove origin
npm install
npm start
npm run build
```

## Usage
- [ ] Complete the above steps
- [ ] Navigate to http://localhost:3333 (or the port you set in 'server/index.js')
- [ ] Have Fun!!!

## Contributing

Feel free to contribute. The requirements are to:
- [ ] Fork this repo to your own repository.
- [ ] Clone from your new fork.
Feel free to make changes in your repository and check for conflicts by running the following scripts, navigating to your localhost port, and ensuring no conflicts or bugs.

```
npm start
npm run build
```
- [ ] Update tests as appropriate.

---
For major changes, please open an issue first to discuss what you would like to change.

Contact Team-Kauri by navigating to https://github.com/Kauri-2021

---

## License

unlicensed