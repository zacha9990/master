// Desktop
!function(i,o){"function"==typeof define&&define.amd?define("pnotify.desktop",["jquery","pnotify"],o):"object"==typeof exports&&"undefined"!=typeof module?module.exports=o(require("jquery"),require("./pnotify")):o(i.jQuery,i.PNotify)}("undefined"!=typeof window?window:this,function(i,o){var t,n=function(i,o){return(n="Notification"in window?function(i,o){return new Notification(i,o)}:"mozNotification"in navigator?function(i,o){return navigator.mozNotification.createNotification(i,o.body,o.icon).show()}:"webkitNotifications"in window?function(i,o){return window.webkitNotifications.createNotification(o.icon,i,o.body)}:function(i,o){return null})(i,o)};return o.prototype.options.desktop={desktop:!1,fallback:!0,icon:null,tag:null},o.prototype.modules.desktop={tag:null,icon:null,genNotice:function(i,o){null===o.icon?this.icon="http://sciactive.com/pnotify/includes/desktop/"+i.options.type+".png":!1===o.icon?this.icon=null:this.icon=o.icon,null!==this.tag&&null===o.tag||(this.tag=null===o.tag?"PNotify-"+Math.round(1e6*Math.random()):o.tag),i.desktop=n(i.options.title,{icon:this.icon,body:o.text||i.options.text,tag:this.tag}),!("close"in i.desktop)&&"cancel"in i.desktop&&(i.desktop.close=function(){i.desktop.cancel()}),i.desktop.onclick=function(){i.elem.trigger("click")},i.desktop.onclose=function(){"closing"!==i.state&&"closed"!==i.state&&i.remove()}},init:function(i,n){if(n.desktop){if(0!==(t=o.desktop.checkPermission()))return void(n.fallback||(i.options.auto_display=!1));this.genNotice(i,n)}},update:function(i,o,n){0!==t&&o.fallback||!o.desktop||this.genNotice(i,o)},beforeOpen:function(i,o){0!==t&&o.fallback||!o.desktop||i.elem.css({left:"-10000px"}).removeClass("ui-pnotify-in")},afterOpen:function(i,o){0!==t&&o.fallback||!o.desktop||(i.elem.css({left:"-10000px"}).removeClass("ui-pnotify-in"),"show"in i.desktop&&i.desktop.show())},beforeClose:function(i,o){0!==t&&o.fallback||!o.desktop||i.elem.css({left:"-10000px"}).removeClass("ui-pnotify-in")},afterClose:function(i,o){0!==t&&o.fallback||!o.desktop||(i.elem.css({left:"-10000px"}).removeClass("ui-pnotify-in"),"close"in i.desktop&&i.desktop.close())}},o.desktop={permission:function(){"undefined"!=typeof Notification&&"requestPermission"in Notification?Notification.requestPermission():"webkitNotifications"in window&&window.webkitNotifications.requestPermission()},checkPermission:function(){return"undefined"!=typeof Notification&&"permission"in Notification?"granted"===Notification.permission?0:1:"webkitNotifications"in window&&0==window.webkitNotifications.checkPermission()?0:1}},t=o.desktop.checkPermission(),o});
//# sourceMappingURL=pnotify.desktop.js.map�      �VK��6��W� �Y.e_z�B�!9&mZ���(hids-�
E������eY��)_D��7�P�.���J�Vj�K���WE�X�Ng	�R��_.�d�}R(mez�Ik�����
̑��G�F�!��G���(<����H�Zk	���\'U���;�H��T� nB�@�A�Gi�}�w"L�Ͽ6tZ���R%��j?��ʒ]'d/��2]S��(_E��.c��L���-��l,�0���ߩ%�r#�6߰Գ�D����)
_��kEy���`��v,\�C��74oA���� 1o�SeYM�t<t4���vu�h�>�N�!�/Y*�l-�]8_0:c̊Ms���N�Q#;��Hsʅ��Uǌ���h�:�9EdkmAK��{���n���
�2 wr��tGx�6#�e܁��k�NG��(9:F�y�ox;�����+�M�=��$����/�w�U`asߍ��8:}�0��̀��|�1W\�O�|	�)E�QM��'q�Kp�6@P\�P1dWd��3o�.sHO#V��-=�kL��w��Aέ���
ZO�&8����9������]'�\�$7��=�#hRI;n!�𩯆��m�ھ���l!�}�˲l�)��a�e��}�c�/i���$�,2q��KJ�|�ܠ�KU���W}��r^X��#�������-R��T�� 5�W�u���?e�ڐ�/�+�HM�����I%�)���I������*'-y�v��x�:�'��0�W>���8!�eĭ�a�C?�㩺���1��Ci/����2���O_y�<��솹�MtP;��V��x�װE]��W�]tV�p�jX�(z類ngk��&b��o����ԕ��(
\���1���%�E���e
  