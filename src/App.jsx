import React, { useEffect, useState } from 'react';
import "./App.css"
import Card from './components/UI/Card';
import Input from './components/UI/Input';
import Button from './components/UI/Button';
import ListItem from './components/UI/ListItem';

function App() {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(savedBookmarks);
  }, []);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = () => {
    const newBookmark = { title, url };
    if (title && url) {
      if(bookmarks.find(b=>b.url===url)){
        alert('Bookmark already exists');
        return;
      }
      if(!url.startsWith('http://') && !url.startsWith('https://')){
        alert('Invalid URL');
        return;
      }
      setBookmarks([...bookmarks, newBookmark]);
    }
    setTitle('');
    setUrl('');
  };

  const handleEdit = (bookmark) => {
    setTitle(bookmark.title);
    setUrl(bookmark.url);
    handleDelete(bookmark);
  }

  const handleDelete = (bookmark) => {
    setBookmarks(bookmarks.filter((b) => b !== bookmark));
  }

  return (
    <div className="container">
      <header className='header'>
        <h1>Bookmark Website</h1>
      </header>
      <div className='main'>
        <Card>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            title="Website Title" />
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            title="Website URL" />
          <Button onClick={addBookmark} title="Add Bookmark" />
        </Card>
      </div>
      {bookmarks.length>0 ? <div className='bookmark-list'>
        <Card>
          <h2 className='bookmark-list-title'>Bookmark List</h2>
          {bookmarks.map((bookmark, index) => (
            <ListItem handleDelete={()=>handleDelete(bookmark)} handleEdit={()=>handleEdit(bookmark)} key={index} title={bookmark.title} url={bookmark.url} />
          ))}
        </Card>
      </div> : null}
    </div>
  );
}

export default App;
