import { Component, OnInit } from '@angular/core';
declare const $ :any;

interface Window {
  _chatq?: any;
}
declare const window: Window;

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addChat() {
  		console.log("add chat");
  		$('<div id="dimelo_chat_item_markup_6c0ee0e45174c026dff00001" class="dimelo_chat_item_markup"></div>').insertAfter('.main');

    	var _chatq = window._chatq || [];
    	_chatq.push(["_fillCustomVariable", "custom_open_chat", true]);
  }

  deleteChat() {
  	console.log("delete chat");
    $('.main').remove('.dimelo_chat_item_markup');
  	var _chatq = window._chatq || [];
	  _chatq.push(["_fillCustomVariable", "custom_open_chat", false]);
	  _chatq.push(["_pageChange"]);
  }

}
