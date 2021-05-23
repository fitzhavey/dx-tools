# DX Tools
https://www.npmjs.com/package/dx-tools

A CLI of useful tools to improve [developer experience](https://hackernoon.com/developer-experience-dx-devs-are-people-too-6590d6577afe).

![dx-tools preview](https://github.com/michaelfitzhavey/dx-tools/raw/master/images/preview.png)

## Installation
To install this CLI globally run
```
npm install dx-tools --global
```

## Commands

### `execute-recursive`
```
dx-tools execute-recursive <folder> <command>
```
Executes a command for all npm projects within a folder.

| **Parameter** | **Default**  | **Description**                                |
|---------------|--------------|------------------------------------------------|
| `command`     | **required** | The command to run, for instance `npm install` |
| `folder`      | `'.'`        | The folder in which to find npm projects       |

## Contributing

### Development
This project can be tested locally by cloning this repo and then running:
```
npm install
npm link
```
This will tell your machine to use the code on your machine for subsequent calls to `dx-tools`.


### Publishing
This project will automatically publish on merge to master branch. Should there be an issue with that it can be published with:
```
npm publish
```


## Roadmap
- have some form of help section