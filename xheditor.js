/**
 * @license Copyright (c) 2009-2013, xhEditor.com. All rights reserved.
 * For licensing, see LGPL-LICENSE.txt or http://xheditor.com/license/lgpl.txt
 */
(function(){
    var editorRoot;
    $('script[src*=xheditor]').each(function(){
        var s=this.src;
        if(s.match(/xheditor[^\/]*\.js/i)){editorRoot=s.replace(/[\?#].*$/, '').replace(/(^|[\/\\])[^\/]*$/, '$1');return false;}
    });
	// editorRoot 编辑器根目录变量，默认是根据script所指向的URL来自动确认，但如果采用AMD加载方式，会出现未找到，所以提供两种方式来保证可以找得到编辑器的根目录。
	if (!editorRoot) {
	    editorRoot = window.editorRoot || $('#xheditor_config').attr('data-editorRoot');
	}
    var scripts = ['core.js', 'lang.js', 'main.js'];
    for(var i=0;i<scripts.length;i++){
        document.write( '<script type="text/javascript" src="'+editorRoot+'src/' + scripts[i] + '"></script>' );
    }
})();