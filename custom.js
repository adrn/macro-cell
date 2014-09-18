$([IPython.events]).on('app_initialized.NotebookApp', function(){
    IPython.load_extensions('macro-cell');
});

