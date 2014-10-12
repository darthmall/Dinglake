# Dinglake

A simple web application for triggering one of several sound effects in response to keypresses. Sound effects are selected randomly from a list of possible sound effects such the same sound effect is unlikely to be played twice in a row.

# Running

Dinglake requires a webserver. The easiest way to run a web server is using Python's SimpleHTTPServer. From a terminal:

    $ cd <path to dinglake>
    $ python -m SimpleHTTPServer

Then, in a browser, load `http://localhost:8000`.

# Configuration

Keybindings and sounds can be changed by editing the `config.json` file. The configuration is a JSON array of objects. Each object contains three properties:

- `name`: used for display purposes in the UI
- `key`: defines the keypress that triggers the sound
- `trigger`: one of "down", "hold", or "up", default is "up"
- `files`: an array of filenames without the '.mp3' extension that are used for this sound effect.

## Arrow keys

The following characters correspond to the keycodes generated when an arrow key is pressed:

- "%": left arrow
- "&": up arrow
- "'": right arrow
- "(": down arrow
