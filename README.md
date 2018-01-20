# SpringBoard

A personal use web page that plays a role of browser's launcher page.

[Online Demo](https://unixzii.github.io/SpringBoard/) (my daily entrance, exactly)

## Install

```shell
git clone https://github.com/unixzii/SpringBoard.git
cd SpringBoard
npm install
```

After the installation, you will have to prepare a file called `bookmark.json` (see the section below for more details) and place it into the `./statics` folder.

When things are all set, you can start it up:

```shell
npm start
```

## bookmark.json

This is the database of **SpringBoard** project, and the structure of its content looks like this:

```json
[
  {
    "title": "Title of Category",
    "items": [
      {
        "title": "Title of Website",
        "url": "http://foo.bar"
      }
    ]
  }
]
```

## Disclaimer

This project is for personal use, you may still open issues about some existing features' bugs, but the priority of new feature requests are not guaranteed.

## Contributing

All PRs are welcomed!

## License

The project is available under the MIT license. See the `LICENSE` file for more info.