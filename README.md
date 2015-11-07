macro-cell
==========

IPython extension for defining custom cell macros. See [this blog post](http://apwhelan.blogspot.com/2014/09/cell-macros-in-ipython-notebook.html) for the motivation / explanation.

Installation
============
* Clone or download this repository
* Copy `macro-cell.js` to one of your `nbextensions` paths. To find out where this might be, run `jupyter --paths`. You can put this in any of the "data" paths + /nbextensions/. For example, `~/Library/Jupyter/nbextensions/macro-cell.js`.
* Create a `macros.json` file in the same nbextensions path which contains a JSON specification of your template cells. See the `demo_macros.json` file in this repository for examples.
* To auto-load the extension when you create a new notebook, you need to enable the extension in your `nbconfig/notebook.json` file. For example, this file might be in `~/.jupyter/nbconfig/notebook.json`, and you should add an entry so that, at minimum, the JSON file looks like:

    {
        "load_extensions": {
            "macro-cell": true
        }
    }

-----------

Any problems / questions should be raised as issues or via twitter at [@adrianprw](https://twitter.com/adrianprw).
