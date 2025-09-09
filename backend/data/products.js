const products = [
  {
    name: 'لابتوب ألترا بوك خفيف الوزن - 16 جيجا رام',
    image: 'https://i.pinimg.com/736x/70/97/aa/7097aab4c0b295f484384248fc3fe402.jpg',
    description:
      'لابتوب ألترا بوك نحيف وخفيف الوزن مثالي للعمل والدراسة، مزود بذاكرة وصول عشوائي (RAM) 16 جيجابايت ومعالج قوي لأداء سلس.',
    brand: 'Dell', // أو أي علامة تجارية أخرى
    category: 'لابتوب',
    price: 1299.99,
    countInStock: 8,
    rating: 4.7,
    numReviews: 15,
  },
  {
    name: 'بلايستيشن 5 إصدار قياسي',
    image: 'https://btech.com/media/catalog/product/cache/8e279240a6612e9579d3be696bac1c07/6/1/61jbcra_7gl._sl1500__1.jpg',
    description:
      'اكتشف عالمًا جديدًا من الألعاب مع بلايستيشن 5، تجربة لعب غامرة ورسوميات مذهلة، مع دعم محرك أقراص Blu-ray.',
    brand: 'Sony',
    category: 'بلايستيشن',
    price: 549.99,
    countInStock: 5,
    rating: 4.9,
    numReviews: 25,
  },
  {
    name: 'ماوس ألعاب لاسلكي احترافي',
    image: 'https://m.media-amazon.com/images/I/61QY3V6A-NL._AC_SX425_.jpg',
    description:
      'ماوس ألعاب لاسلكي عالي الدقة مع أزرار قابلة للبرمجة وإضاءة RGB قابلة للتخصيص، مثالي للاعبين المحترفين.',
    brand: 'Logitech',
    category: 'اكسسوارات',
    price: 79.99,
    countInStock: 12,
    rating: 4.6,
    numReviews: 10,
  },
  {
    name: 'شاشة ألعاب منحنية 27 بوصة - 144 هرتز',
    image: 'https://m.media-amazon.com/images/I/81+VR6F3KSL._AC_SL1500_.jpg',
    description:
      'شاشة ألعاب منحنية مقاس 27 بوصة بمعدل تحديث 144 هرتز لتجربة لعب فائقة السلاسة وبدون تقطيع.',
    brand: 'Samsung', // أو أي علامة تجارية أخرى
    category: 'اكسسوارات',
    price: 349.99,
    countInStock: 7,
    rating: 4.4,
    numReviews: 18,
  },
  {
    name: 'لابتوب للأعمال - معالج i7',
    image: 'https://i.pinimg.com/736x/70/97/aa/7097aab4c0b295f484384248fc3fe402.jpg',
    description:
      'لابتوب قوي وموثوق للأعمال اليومية، مزود بمعالج Intel Core i7 وذاكرة تخزين SSD سريعة لأداء فائق.',
    brand: 'HP', // أو أي علامة تجارية أخرى
    category: 'لابتوب',
    price: 999.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 20,
  },
  {
    name: 'حقيبة لابتوب مقاومة للماء 15.6 بوصة',
    image: 'https://www.alibaba.com/showroom/pictures-of-laptop-bag.html',
    description:
      'حقيبة لابتوب أنيقة ومقاومة للماء تحمي جهازك مقاس 15.6 بوصة من الصدمات والخدوش، مع مساحة إضافية للملحقات.',
    brand: 'Generic', // أو أي علامة تجارية
    category: 'اكسسوارات',
    price: 45.00,
    countInStock: 20,
    rating: 4.2,
    numReviews: 8,
  },
  {
    name: 'وحدة تحكم إضافية لبلايستيشن 5 - DualSense',
    image: 'https://www.playstation.com/en-us/accessories/dualsense-wireless-controller/',
    description:
      'وحدة تحكم DualSense أصلية لبلايستيشن 5 توفر استجابة لمسية غامرة ومؤثرات ديناميكية لتجربة لعب واقعية.',
    brand: 'Sony',
    category: 'بلايستيشن',
    price: 69.99,
    countInStock: 15,
    rating: 4.8,
    numReviews: 14,
  },
];

export default products;