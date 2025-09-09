import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  const [keyword, setKeyword] = useState(urlKeyword || '');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) { 
      navigate(`/search/${keyword.trim()}`);
      setKeyword(''); 
    } else {
      navigate('/'); 
    }
  };

  return (
    <Form onSubmit={submitHandler} className='search-box-container'>
      <Button type='submit' className='search-button'> 
        بحث
      </Button>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder='ابحث عن منتجات...' 
        className='search-box-input'
      ></Form.Control>
    </Form>
  );
};

export default SearchBox;