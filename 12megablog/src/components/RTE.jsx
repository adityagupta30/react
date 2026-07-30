import React from 'react'
import {Editor}from '@tinymce/tinymce-react';
import{Controller}from'react-hook-form';


export default function RTE({name,control,label,
    defaultValue=""}) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>
              {label}  </label>}

                <Controller
                name ={name || "content"}
                control={control}
                defaultValue={defaultValue}
               render={({ field }) => (
    <Editor
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
        value={field.value}
        onEditorChange={field.onChange}
        init={{
            height: 500,
            menubar: true,
            plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "help",
                "wordcount",
            ],
            toolbar:
                "undo redo | blocks | bold italic | alignleft aligncenter alignright | bullist numlist | image | code",
        }}
    />
)}
                />

        </div>
    )
}


