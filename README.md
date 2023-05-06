# disappearing song

This project will be a website to post transient poetry. The poetry will last only as long as it stays on the page. There will be a set number of poems on the page, and as new poetry is posted, the oldest poems disappear - like writing words on a foggy glass.

## Prepare Your Environment

Install json-server to run this single page web application.

```bash
$ npm sinatll -g json-server
```

Then run the server with: 
```bash
$ json-server --watch db.json
```

This will server your code on http://localhost:3000.

## Usage

On page load, render a list of poems from the API called db.json.

Click the plus button next to the header at the top to show a collapsable poem submission form. The form includes a text input box for the poem, an input line for an imgURL and a signature.

Upon submission of form, the new poem will be posted and the last poem will be deleted.