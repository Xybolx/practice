import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import ResumeResult from './ResumeResult';

const ResumeEditor = () => {

    const [result, setResult] = useState([]);

    return (
        <div className="container-fluid">
            <div className="text-center col-md-6 offset-md-3">
            <h2>Resume Editor</h2>
            </div>
            <CKEditor
                onInit={ editor => {
                    console.log( 'Editor is ready to use!', editor );

                    // Insert the toolbar before the editable area.
                    editor.ui.getEditableElement().parentElement.insertBefore(
                        editor.ui.view.toolbar.element,
                        editor.ui.getEditableElement()
                    );
                } }
                editor={ DecoupledEditor }
                onChange={ ( ev, editor ) => {
                    const data = editor.getData();
                    setResult(data);
                    console.log(data);
                } }
                onBlur={ ( ev, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( ev, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />
            <ResumeResult content={result} />
        </div>
    );
};

export default ResumeEditor;