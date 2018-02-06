//import { Component } from '@angular/core';

//@Component({
//    selector: 'case-texteditor',
//    template: `<quill-editor[(ngModel)]="editorContent"
//                [options] = "editorOptions"
//                (blur) = "onEditorBlured($event)"
//                (focus) = "onEditorFocused($event)"
//                (ready) = "onEditorCreated($event)"
//                (change) = "onContentChanged($event)" > </quill-editor>`,
//    styleUrls: ['./texteditor.component.scss']
//})
///** texteditor component*/
//export class TexteditorComponent {
//    /** texteditor ctor */
//    public editor;
//    public editorContent = `<h3>I am Example content</h3>`;
//    public editorOptions = {
//        placeholder: "insert content..."
//    };

//    constructor() { }

//    onEditorBlured(quill) {
//        console.log('editor blur!', quill);
//    }

//    onEditorFocused(quill) {
//        console.log('editor focus!', quill);
//    }

//    onEditorCreated(quill) {
//        this.editor = quill;
//        console.log('quill is ready! this is current quill instance object', quill);
//    }

//    onContentChanged({ quill, html, text }) {
//        console.log('quill content is changed!', quill, html, text);
//    }

//    ngOnInit() {
//        setTimeout(() => {
//            this.editorContent = '<h1>content changed!</h1>';
//            console.log('you can use the quill instance object to do something', this.editor);
//            // this.editor.disable();
//        }, 2800)
//    }
//}