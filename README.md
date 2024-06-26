# Notes App

This is a simple command-line application for managing notes. It allows you to add, remove, list, and read notes using commands. The application uses Node.js and the yargs library for command-line argument parsing.

## Features

- **Add Note**: Add a new note with a title and body.
- **Remove Note**: Remove a note by its title.
- **List Notes**: List all the notes.
- **Read Note**: Read a note by its title.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/notes-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd notes-app
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

### Add a Note

To add a new note, use the `add` command with `--title` and `--body` options:

    ```bash
    node app.js add --title="Note Title" --body="Note body"
    ```

### Remove a Note

To remove a note, use the `remove` command with the `--title` option:

    ```bash
    node app.js remove --title="Note Title"
    ```

### List Notes

To list all the notes, use the `list` command:

    ```bash
    node app.js list
    ```

### Read a Note

To read a specific note, use the `read` command with the `--title` option:

    ```bash
    node app.js read --title="Note Title"
    ```

## File Structure

- **app.js**: Main application file that sets up yargs commands.
- **notes.js**: Contains functions for adding, removing, listing, and reading notes.
- **notes.json**: JSON file where notes are stored.

## Dependencies

- [yargs](https://www.npmjs.com/package/yargs): For parsing command-line arguments.
- [fs](https://nodejs.org/api/fs.html): Node.js file system module for reading and writing files.


