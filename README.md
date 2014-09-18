macro-cell
==========

IPython extension for defining custom cell macros. See [this blog post](http://apwhelan.blogspot.com/2014/09/cell-macros-in-ipython-notebook.html) for the motivation / explanation.

Installation
============
* Clone or download this repository
* Copy `macro-cell.js` to your `nbextensions` path (probably at `~/.ipython/nbextensions`)
* To auto-load the extension when you create a new notebook, add the following to your IPython profile's `custom.js` file (probably at `~/.ipython/profile_default/static/custom/custom.js`):

        // activate extensions only after Notebook is initialized
        require(["base/js/events"], function (events) {
            events.on("app_initialized.NotebookApp", function () {
                    IPython.load_extensions('macro-cell');
            });
        });

* Create a `macros.json` file in your IPython profile custom path (probably at `~/.ipython/profile_default/static/custom/`) which contains a JSON specification of your macro cells. See the `demo_macros.json` file in this repository for examples.

Copy-paste installation
=======================
 __Note if you've created a custom profile, you must change `profile_default` to whatever your custom profile is called!__

    curl -L https://rawgithub.com/adrn/macro-cell/master/macro-cell.js > $(ipython locate)/nbextensions/macro-cell.js
    curl -L https://rawgithub.com/adrn/macro-cell/master/custom.js >> $(ipython locate)/profile_default/static/custom/custom.js
    curl -L https://rawgithub.com/adrn/macro-cell/master/demo_macros.json > $(ipython locate)/profile_default/static/custom/macros.json

You then have to edit the file `$(ipython locate)/profile_default/static/custom/macros.json` to specify your own macros. Some are included as examples.

-----------

Any problems / questions should be raised as issues or via twitter at [@adrianprw](https://twitter.com/adrianprw).
