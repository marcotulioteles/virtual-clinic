# Virtual Clinic

### status (building...)

Virtual Clinic is a web platform to make health care appointments, buy medical products in general and hire services. It is a complete solution for health professionals, patients and health companies.

![](/public/images/virtual-clinic-frontend.gif)

## Pre-requisites

Before you begin, you will need to have the following tools installed on your machine: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/getting-started/install), it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)

## How to see this work?

- running the project:

```bash
# Clone this repository
git clone https://github.com/marcotulioteles/virtual-clinic.git

# Access the project folder cmd/terminal
cd virtual-clinic

# install the dependencies
yarn

# Run the application
yarn dev

# The server will start at port: 3000 - go to http://localhost:3000
```



## Running the API service

```bash
# Before access the application on localhost, run this
yarn json-server data/db.json -p 3333 -d 2000
```



Now you can navigate at it!

## Tech Stack

The following tools were used in the construction of the project:

- [ReactJS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/docs/getting-started)
- [Json server](https://www.npmjs.com/package/json-server)
- [Axios](https://github.com/axios/axios#installing)

## Author
Marco Tulio Teles - web app building by [Nautillus](https://github.com/nautillusdev)