# nodejs_tutorial
# Nodejs examples

Sharing very simple exampels during my journey in getting to know nodejs.

### Few notes:
#### 1. How to use Npm (Node pckg manager) to create a package out of this tutorial?
The package json is used to hold metadata (name, version, license, etc.) for our project. Most important, it maintains the dependencies. The package-lock file holds the relevant versions so it is important to keep it also in the source control.
You should use it as follows:

1. using the terminal, type:
`npm init`

2. now follow the intuitive step by step of creating the package

The resulting [package.json](./package.json)

#### 2. How to use Npm to install external package (dependency)?

Let's assume we would like to add dependency to [express web framework](https://expressjs.com/).

To do that use the terminal and type:
`npm install express`
Now open the json.package and see that `dependencies` was added to the [package.json](./package.json)
