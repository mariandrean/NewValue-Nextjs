"use client";

import React, { useCallback, useState } from 'react';

import TipTapStarterKit from '@tiptap/starter-kit';
import TipTapUnderline from '@tiptap/extension-underline';
import TipTapLink from '@tiptap/extension-link';
import TipTapImage from '@tiptap/extension-image';

import { EditorContent, useEditor } from '@tiptap/react';

import { uploadImage } from '@/utils/cloudinary';

import Swal from 'sweetalert2';

import BrokenLinkIcon from '../../public/tiptap-icons/broken_link.png'
import LinkIcon from '../../public/tiptap-icons/link.png'
import FileIcon from '../../public/tiptap-icons/Image_file.png'
import BulletedListIcon from '../../public/tiptap-icons/bulleted_list.png'
import NumberedListIcon from '../../public/tiptap-icons/numbered_list.png'
import Image from 'next/image';

const extensions = [
  TipTapStarterKit,
  TipTapUnderline,
  TipTapLink.configure({
    linkOnPaste: false,
    HTMLAttributes: {
      class: 'link-style',
    },
  }),
  TipTapImage.configure({
    inline: true,
    allowBase64: true,
    HTMLAttributes: {
      class: 'my-2',
    },
  })
]

const TipTap = ({ onEditorContentSave, content }) => {
  const [loadingImage, setLoadingImage] = useState(false);

  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class: (
          'prose'
        ),
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onEditorContentSave(html);
    },
  })

  const setLink = useCallback(async () => {
    const inputValue = editor.getAttributes('link').href;

    const { value: url } = await Swal.fire({
      input: "url",
      inputValue,
      inputPlaceholder: "Enlace",
      confirmButtonText: "Guardar",
      validationMessage: "Enlace inválido",
      showCancelButton: true,
      cancelButtonText: `Cancelar`,
      allowOutsideClick: true
    });

    if (url === null) {
      return
    }

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink()
        .run()
      return
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url })
      .run()
  }, [editor])

  const handleImage = useCallback(async (e) => {
    Swal.fire({
      title: "Cargando imagen...",
      didOpen: () => {
        Swal.showLoading();

      }
    })
    const imageUrl = await uploadImage(e);

    if (imageUrl) {
      Swal.close();
      editor.chain().focus().setImage({ src: imageUrl.url, alt: imageUrl.name }).run()
    }
    
  }, [editor])

  const handleSelectImage = () => {
    const imageInput = document.getElementById("tiptap-image-input")
    imageInput.click();
  }

  if (!editor) {
    return null;
  }

  return (
    <div className='mx- my-2'>
      <div className='w-full flex flex-wrap bg-gray-300 p-3 gap-2 text-black'>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <em>I</em>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          <s>U</s>
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleUnderline()
              .run()
          }
          className={editor.isActive('underline') ? 'is-active' : ''}
        >
          <u>U</u>
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          H1
        </button>

        <button type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          H2
        </button>

        <button type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          H3
        </button>

        <button type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <Image src={NumberedListIcon} width={20} height={20} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <Image src={BulletedListIcon} width={20} height={20} />
        </button>

        <button type="button" onClick={handleSelectImage}>
          <input id="tiptap-image-input" type="file" accept="image/*" name="tiptap-image-input" className='hidden' onChange={handleImage} />
          <Image src={FileIcon} width={20} height={20} />
        </button>

        <button type='button' onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
          <Image src={LinkIcon} width={20} height={20} />
        </button>

        <button type="button"
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive('link')}
        >
          <Image src={BrokenLinkIcon} alt="broken-link" width={20} height={20} />
        </button>

      </div>

      <div className='border border-gray-500 border-t-0 min-h-[8rem]'>
        <EditorContent editor={editor} className='' />
      </div>

    </div>
  )
}

export default TipTap;