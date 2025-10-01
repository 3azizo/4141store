import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import {
  useGetProductDetailsQuery,
  useUpdateProductMutation,
  useUploadProductImageMutation,
} from '../../slices/productsApiSlice';
import { subCategoriseList } from '../../constants';

const ProductEditScreen = () => {
  const { id: productId } = useParams();
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  const [updateProduct, { isLoading: loadingUpdate }] =
    useUpdateProductMutation();
    const [uploadProductImage, { isLoading: loadingUpload }] =
    useUploadProductImageMutation();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!image) {
      toast.error('يرجى رفع صورة للمنتج.');
      return;
    }
    try {
      await updateProduct({
        productId,
        name,
        price,
        image,
        brand,
        category,
        subCategory,
        description,
        countInStock,
      }).unwrap();
      toast.success('تم تحديث المنتج بنجاح');
      refetch();
      navigate('/admin/productlist');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setBrand(product.brand);
      setCategory(product.category);
      setSubCategory(product.subCategory||" ")
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
  }, [product]);

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    try {
      const res = await uploadProductImage(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  
  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        رجوع
      </Link>
      <FormContainer>
        <h1>تعديل المنتج</h1>
        {loadingUpdate && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error.data.message}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>الاسم</Form.Label>
              <Form.Control
                type='text'
                placeholder='أدخل اسم المنتج'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>السعر</Form.Label>
              <Form.Control
                type='number'
                placeholder='أدخل السعر'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>الصورة</Form.Label>
              <Form.Control
                type='text'
                placeholder='أدخل رابط الصورة'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <Form.Control
                type='file'
                onChange={uploadFileHandler}
              />
              {loadingUpload && <Loader />}
            </Form.Group>

            <Form.Group controlId='brand'>
              <Form.Label>الماركة</Form.Label>
              <Form.Control
                type='text'
                placeholder='أدخل الماركة'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='countInStock'>
              <Form.Label>المخزون</Form.Label>
              <Form.Control
                type='number'
                placeholder='أدخل الكمية'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>الفئة</Form.Label>
              <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value='رجالى'>رجالى</option>
                <option value='نسائى'>نسائى</option>
                <option value='اطفال'>اطفال</option>
                <option value='احذية'>احذية</option> 
                <option value='حراس المرمى'> حراس المرمى</option>
                <option value='ادوات رياضية'>ادوات رياضية</option> 
              </Form.Select>
            </Form.Group>
            <Form.Group controlId='subcategory'>
              <Form.Label>الفئة الفرعية</Form.Label>
              {category && subCategoriseList[category] ? (
                <Form.Select 
                  value={subCategory || ''}   // ✅ ضمان إن القيمة مش undefined
                  onChange={(e) => setSubCategory(e.target.value)}
                >
                  <option value=''>اختر الفئة الفرعية</option> 
                  {subCategoriseList[category].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </Form.Select>
              ) : (
                <span>اختار الفئة الرئيسية أولاً</span>
              )}
            </Form.Group>



            <Form.Group controlId='description'>
              <Form.Label>الوصف</Form.Label>
              <Form.Control
                type='text'
                placeholder='أدخل الوصف'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Button type='submit' variant='primary' className="mt-3">
              تحديث المنتج
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;
