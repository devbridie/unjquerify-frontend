# unjquerify-frontend

This project is the code behind [unjquerify.com](https://www.unjquerify.com). 
It uses [unjquerify](https://github.com/devbridie/unjquerify) as a source for plugins and [`babel-standalone`](https://github.com/babel/babel-standalone) for client-side transformations.

## Usage
* Ensure that `npm` is available.
* As [`unjquerify`](https://github.com/devbridie/unjquerify) is still unpublished, it must be built manually. Ensure it is built in a directory next to this one by cloning it and building it.
* Use `npm install` to install dependencies.
* Use `npx ng serve --open` to run a local development server. This will open a browser pointed to a local development copy of `unjquerify-frontend`.

## Contributing
Contributions are always welcome. Please see this [project's issue tracker](https://github.com/devbridie/unjquerify-frontend/issues). Before submitting a pull request, please verify that your changes pass linting (run with `npx ng lint`).
