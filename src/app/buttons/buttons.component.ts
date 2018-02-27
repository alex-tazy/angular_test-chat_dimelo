import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	(function (d) {
		var cm = d.createElement('scr' + 'ipt');
		cm.type = 'text/javascript';
		cm.async = true;
		cm.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'manpower.dimelochat.com/chat/b3ea4f01a4c610baf90cefc6/loader.js';
		var s = d.getElementsByTagName('scr' + 'ipt')[0];
		s.parentNode.insertBefore(cm, s);
	}(document));
  }

  addChat() {
  	(function($) {
  		console.log("add chat");
  		$('<div id="dimelo_chat_item_markup_6c0ee0e45174c026dff00001" class="dimelo_chat_item_markup"></div>').insertAfter('.main');

	var _chatq = window._chatq || [];
	_chatq.push(["_fillCustomVariable", "custom_open_chat", true]);
  	}) (jQuery)
  }

  deleteChat() {
  	console.log("delete chat");
  	var _chatq = window._chatq || [];
	_chatq.push(["_fillCustomVariable", "custom_open_chat", false]);
	_chatq.push(["_pageChange"]);
  }

}
