import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* OG tags for social media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />

      {/* Twitter tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: '4141 store| Sport Tools Store | متجر الأدوات الرياضية',
  description:
    'أفضل متجر لبيع الأدوات الرياضية: كرات، أحذية، ملابس رياضية، معدات جيم، وإكسسوارات لياقة بدنية.',
  keywords: 'كرة قدم, أحذية رياضية, معدات جيم, أدوات رياضية, ملابس رياضية, لياقة بدنية,store,sport store,shop',
};

export default Meta;
