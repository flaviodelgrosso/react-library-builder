<img src="react-library-builder.png" width="400px" />

# Creating a Custom React Library

Creating a custom React library can be a great way to share reusable components and functionality across multiple projects. This guide will walk you through the process of setting up and developing a library using the React Library Builder.

## Step 1: Set up the Project

First, create a new directory for your library and navigate to it in the terminal. Then, clone the React Library Builder repository using the following command:

```bash {1}
git clone https://github.com/flaviodelgrosso/react-library-builder.git
cd react-library-builder
yarn install
```

Alternatively, you can download the repository as a zip file of the latest release from [here](https://github.com/flaviodelgrosso/react-library-builder/releases) and extract it to your new directory.

Once you have the repository downloaded, navigate to the project directory and run the following command to install the necessary dependencies:

```bash
yarn install
```

## Step 2: Develop Your Components

Now that your project is set up, you can start developing your custom components. In the `src/components` folder you can start creating a new component file. For example, if you were creating a button component, you would create a file called `Button.tsx` in the `src/components` folder.

As you develop your components, make sure to update the `src/index.ts` file to include them in your library. This will allow other developers to import and use your components in their own projects.

It's also important to include a `YourComponent.story.tsx` file for each component you create. This file will allow you to view and test your component in Storybook, a tool for developing and testing UI components.

## Step 3: Style Your Components

The React Library Builder supports both SCSS and CSS out of the box, so you can style your components as you normally would. If you want to use CSS modules, you can refer to the [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss) documentation for more information.

## Step 4: Test Your Components

Testing is crucial when developing a library, as it helps ensure that your components work as expected. The React Library Builder uses [Vitest](https://vitest.dev/) and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) for testing. You can find an example test file in the `Button.spec.tsx` file.

To run the tests, use the following command:

```bash
yarn test
```

To run the test and show the coverage, use the following command:

```bash
yarn test:coverage
```

## Step 5: Linting

Linting is an important step in maintaining code quality, The React Library Builder uses [ESLint](https://eslint.org/) and [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) for linting. You can modify linting rules by overriding them in the `.eslintrc` file.

To run the linter, use the following command:

```bash
yarn lint
```

To automatically fix linting issues, use the following command:

```bash
yarn lint:fix
```

## Step 6: Publishing Your Library

When your library is ready, you can publish it to [NPM](https://www.npmjs.com/) so that others can use it in their own projects. Make sure you have an active account with NPM, and that your `.npmrc` file is set up correctly. Also, ensure that the repository URL in the `package.json` file is set to your repository URL. Then, use the following command to release your library:

```bash
yarn release
```

## Step 7: Deploy Storybook to GitHub Pages

You can also deploy your [Storybook](https://storybook.js.org/basics/writing-stories/) to GitHub Pages to make it easier for others to view and test your components. Make sure the repository URL in the `package.json` file is set to your repository URL, then use the following command:

```bash
yarn deploy
```

## Additional Scripts

- `yarn start` : Only serves Storybook.
- `yarn build` : Builds your library (build can be found in dist folder).
- `yarn storybook:build` : Builds the static Storybook in case you want to deploy it.
- `yarn eslint`: Runs only the JavaScript linter.
- `yarn eslint:fix`: Runs only the JavaScript linter and fixes automatic fixable issues.
- `yarn typecheck`: Runs typescript type checker.

  And that's it! You now have a working React library that you can use in your own projects and share with others. Don't forget to refer to the Storybook documentation for information on custom layouts, styling, and more.
