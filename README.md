macro-cell
==========

IPython extension for defining custom cell macros.

Installation
============
* Clone or download this repository
* Copy `macro-cell.js` to your `nbextensions` path
* To auto-load the extension when you create a new notebook, add the following to your IPython profile's `custom.js` file:


    // activate extensions only after Notebook is initialized
    require(["base/js/events"], function (events) {
        events.on("app_initialized.NotebookApp", function () {
                IPython.load_extensions('macro-cell');
        });
    });

__The easy way__ (but note if you've created a custom profile, you must change `profile_default` to whatever your custom profile is called!):

    curl -L https://rawgithub.com/adrn/macro-cell/master/macro-cell.js > $(ipython locate)/nbextensions/macro-cell.js
    curl -L https://rawgithub.com/adrn/macro-cell/master/custom.js >> $(ipython locate)/profile_default/static/custom/custom.js
    curl -L https://rawgithub.com/adrn/macro-cell/master/demo_macros.json > $(ipython locate)/profile_default/static/custom/macros.json

You then have to edit the file `$(ipython locate)/profile_default/static/custom/macros.json` to specify your own macros. Some are included as examples.

Any problems / questions should be raised as issues or via twitter at [@adrianprw](https://twitter.com/adrianprw).
